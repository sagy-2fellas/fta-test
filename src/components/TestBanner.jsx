import React from 'react';

const TestBanner = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FCD34D',
        color: '#1F2937',
        padding: '8px 16px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '14px',
        zIndex: 9999,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderBottom: '2px solid #F59E0B'
      }}
    >
      🧪 TEST VERSION - NOT FOR PRODUCTION USE - FOR TESTING PURPOSES ONLY
    </div>
  );
};

export default TestBanner;
