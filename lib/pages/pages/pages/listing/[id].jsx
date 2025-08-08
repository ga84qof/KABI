import Head from 'next/head';
import { supabase } from '../../lib/supabaseClient';

export async function getServerSideProps(ctx) {
  const id = ctx.params?.id;
  const { data, error } = await supabase
    .from('listings')
    .select('*')
    .eq('id', id)
    .single();

  if (error) console.error(error);
  return { props: { listing: data || null } };
}

export default function ListingPage({ listing }) {
  if (!listing) return <div>Listing not found.</div>;

  return (
    <>
      <Head>
        <title>{listing.title} – {process.env.NEXT_PUBLIC_SITE_NAME || 'Kabi'}</title>
      </Head>
      <div style={{display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:16}}>
        <div>
          <div style={{height:260, background:'#e5e7eb', borderRadius:12}} />
          <div style={{marginTop:12, border:'1px solid #eee', borderRadius:12, padding:12}}>
            <h1 style={{margin:'4px 0', fontSize:22, fontWeight:600}}>{listing.title}</h1>
            <div style={{fontSize:14, color:'#555'}}>
              {listing.size_m2} m² • {listing.floor || 'Ground'} • Access {listing.access_hours || 'n/a'}
            </div>
            <p style={{marginTop:8}}>{listing.description || 'No description provided.'}</p>
            <div style={{marginTop:8, fontSize:14, color:'#666'}}>
              {(listing.neighborhood ? `${listing.neighborhood}, ` : '') + (listing.address_hint || '')}
            </div>
            {Array.isArray(listing.amenities) && listing.amenities.length > 0 && (
              <div style={{marginTop:8}}>
                <strong>Amenities:</strong> {listing.amenities.join(', ')}
              </div>
            )}
            {Array.isArray(listing.rules) && listing.rules.length > 0 && (
              <div style={{marginTop:8}}>
                <strong>Rules:</strong> {listing.rules.join(', ')}
              </div>
            )}
          </div>
        </div>
        <div>
          <div style={{border:'1px solid #eee', borderRadius:12, padding:12}}>
            <div style={{fontSize:24, fontWeight:700}}>€{listing.price_per_month_eur} <span style={{fontSize:14, fontWeight:400, color:'#666'}}>/ month</span></div>
            <div style={{fontSize:12, color:'#666', marginBottom:8}}>Free cancel up to 48h before start; 50% after.</div>
            <button style={{width:'100%', padding:'10px 12px', borderRadius:10, background:'#111', color:'#fff', border:'none', fontWeight:600}}>Book (demo)</button>
          </div>
          <div style={{marginTop:12, border:'1px solid #eee', borderRadius:12, padding:12, fontSize:14}}>
            <div style={{fontWeight:600, marginBottom:6}}>Host</div>
            <div>Demo Host • 4.8 ★</div>
          </div>
        </div>
      </div>
    </>
  );
}
