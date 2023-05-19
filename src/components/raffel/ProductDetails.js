import React from 'react'

export default function ProductDetails() {
  return (
       <>
            <div className='container w-50'>
                <form action="">
                    <div className="form-group rounded-pill">
                        <label for="inputState"></label>
                        <select id="inputState" className="form-control">
                            <option selected>SELECT BRAND</option>
                        </select>
                    </div>
                    <div className="form-group rounded-pill">
                        <label for="inputState"></label>
                        <select id="inputState" className="form-control">
                            <option selected>SELECT MODEL</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-success rounded-pill m-3 float-end">PROCESS</button>
                </form>
            </div>
        </>
    
  )
}
