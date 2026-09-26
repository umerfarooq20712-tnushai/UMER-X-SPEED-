'use client';

export default function Home() {
  const playSound = () => {
    const audio = new Audio('/dialogue.mp3');
    audio.play().catch((err) => console.log("Audio error:", err));
  };

  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#111', 
      color: '#fff',
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ marginBottom: '20px' }}>Soundboard</h1>
      
      <button 
        onClick={playSound}
        style={{
          padding: '16px 32px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#e50914',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Play Sound 🔊
      </button>
    </main>
  );
}
