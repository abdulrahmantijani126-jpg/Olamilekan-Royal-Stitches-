export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#fef3c7',
      padding: '40px',
      fontFamily: 'Arial'
    }}>
      <h1 style={{
        fontSize: '50px',
        color: '#7f1d1d'
      }}>
        Olamilekan Royal Stitches
      </h1>

      <p style={{
        fontSize: '20px',
        marginTop: '20px'
      }}>
        Premium Menswear & Tailoring
      </p>

      <a
        href="https://wa.me/2348110346087"
        style={{
          display: 'inline-block',
          marginTop: '30px',
          padding: '15px 30px',
          background: '#7f1d1d',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '10px'
        }}
      >
        Book Now
      </a>
    </div>
  )
}
