'use-clint'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (<>
    <section className="footer">
      <div className="bottomBar">
        <div className="row text-center">
          <div className="col">
            <p className='mt-1'>© GRO School {currentYear}</p>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

