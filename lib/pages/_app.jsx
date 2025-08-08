export default function MyApp({ Component, pageProps }) {
  return (
    <div style={{fontFamily:'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
      <header style={{padding:'12px 16px', borderBottom:'1px solid #eee', position:'sticky', top:0, background:'#fff', zIndex:1}}>
        <div style={{maxWidth:960, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <div style={{width:32, height:32, background:'#111', color:'#fff', display:'grid', placeItems:'center', borderRadius:12, fontWeight:700}}>K</div>
            <strong>{process.env.NEXT_PUBLIC_SITE_NAME || 'Kabi'}</strong>
          </div>
          <nav style={{display:'flex', gap:12, fontSize:14}}>
            <a href="/">Search</a>
          </nav>
        </div>
      </header>
      <main style={{maxWidth:960, margin:'0 auto', padding:16}}>
        <Component {...pageProps} />
      </main>
      <footer style={{padding:'16px', borderTop:'1px solid #eee', color:'#666', fontSize:12}}>
        <div style={{maxWidth:960, margin:'0 auto', display:'flex', justifyContent:'space-between'}}>
          <span>© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME || 'Kabi'}</span>
          <span>Munich pilot</span>
        </div>
      </footer>
    </div>
  );
}
