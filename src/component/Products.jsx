import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const Products = () => {
    const [data, setDate] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setDate(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
            
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>  {filter.map((product) => {
                return (
                    <>
                        <div className='col-md-3 mb-4'>
                            <div className="card h-100 text-center p-4" key={product.id} >
                                <img src={product.image} className="card-img-top" alt={product.title}  height="250px"/>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0,12)}....</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <NavLink to={`/products/${product.id}`} className='btn btn-outline-dark'>
                                    Buy Now
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}</>
        )
    }
    const ShowProducts = () => {
        return (
            <>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3'>
                                <div className="card" >
                                    <img src={product.image} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>
                            Latest Product
                        </h1>
                        <hr></hr>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {Loading ? <Loading/> : <ShowProducts/>}
                </div>

            </div>
        </div>
    )
}
export default Products;
