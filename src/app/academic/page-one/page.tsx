'use-clint'

export default function PageOne() {

  return (
    <>
      <main id="main" className="main">
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="flexTitle">
                    <h2 className="card-title">Page One</h2>
                    <div className="rightBtn">
                      <button type="button" className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-plus-circle"></i>Student</button>
                      <button type="button" className="btn btn-primary"><i className="bi bi-x-circle-fill"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}