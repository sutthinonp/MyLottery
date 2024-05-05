import React from 'react';
import Link from 'next/link'

function Page() {
  return (
    <div className='navbar bg-accent mb-30 shadow-sm'>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Link href="/" className="btn btn-ghost text-xl">รางวัลล็อตเตอรี่ Diversition</Link>
      </div>
    </div>
  );
}

export default Page;
