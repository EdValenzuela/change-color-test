import React from 'react'
import { allColors } from '../colors';

const CardButtons = ({handleChangeColor}) => {

    const { green, yellow, red, blue, black } = allColors;

    return (
        <div className='row w-auto mx-auto gap-3'>
            <button type="button" className="col-12 col-md-3 btn btn-danger btn-lg" onClick={() => handleChangeColor(red)} >
                Red
            </button>

            <button type="button" className="col-12 col-md-3 btn btn-success btn-lg" onClick={() => handleChangeColor(green)} >
                Green
            </button>

            <button type="button" className="col-12 col-md-3 btn btn-warning btn-lg" onClick={() => handleChangeColor(yellow)} >
                Yellow
            </button>

            <button type="button" className="col-12 col-md-3 btn btn-dark btn-lg" onClick={() => handleChangeColor(black)} >
                Black
            </button>

            <button type="button" className="col-12 col-md-3 btn btn-primary btn-lg" onClick={() => handleChangeColor(blue)} >
                Blue
            </button>
        </div>
    )
}

export default CardButtons