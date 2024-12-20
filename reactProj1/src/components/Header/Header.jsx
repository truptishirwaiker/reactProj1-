import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img 
          src="/images/image7.jpeg" 
          alt="Logo" 
          style={styles.logo} 
        />
        <h1 style={styles.title}>MOVIESHUB</h1>
      </div>
      <div style={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Search..." 
          style={styles.searchInput} 
        />
        <button style={styles.searchButton}>Search</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
    marginRight: '10px',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    margin: 0,
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '10px',
  },
  searchButton: {
    padding: '8px 16px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Header;
