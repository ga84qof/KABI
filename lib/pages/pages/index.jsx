import Head from 'next/head';
import Link from 'next/link';
import { supabase } from '../lib/supabaseClient';

export async function getServerSideProps() {
  const { data, error } = await supabase
    .from('listings')
    .select('id, title, neighborhood, size_m2, price_per_month_eur')
    .limit(24);

  if (error) console.error(error);
  return { props: { listings: data || [] } };
}

export default function Home({ listings }) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME || 'Kabi'} – Find storage</title>
      </Head>
      <h1 style={{fontSize:24, fontWeight:600, margin:'8px 0 16px'}}>Find storage in Munich</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:16}}>
        {listings.map((l) => (
          <Link href={`/listing/${l.id}`} key={l.id} style={{textDecoration:'none', color:'inherit'}}>
            <div style={{border:'1px solid #eee', borderRadius:12, overflow:'hidden'}}>
              <div style={{height:140, background:'#e5e7eb'}} />
              <div style={{padding:12}}>
                <div style={{fontWeight:600, fontSize:14}}>{l.title}</div>
                <div style={{fontSize:12, color:'#666'}}>{l.neighborhood || 'Munich'} • {l.size_m2} m²</div>
                <div style={{marginTop:4, fontSize:14}}>€{l.price_per_month_eur}/month</div>
              </div>
            </div>
          </Link>
        ))}
        {listings.length === 0 && (
          <div style={{color:'#666'}}>No listings found. Did you import seeds into Supabase?</div>
        )}
      </div>
    </>
  );
}
