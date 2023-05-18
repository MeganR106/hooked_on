import React, { useState } from 'react';
import './SquareCalculator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBabyCarriage, faBaby, faBed, faChessQueen, faChessKing } from '@fortawesome/free-solid-svg-icons'
import slide3 from './img/slide/slide-3.jpg';

function SquareCalculator() {
    const [afghanWidth, setAfghanWidth] = useState();
    const [afghanLength, setAfghanLength] = useState();
    const [squareWidth, setSquareWidth] = useState();
    const [squareLength, setSquareLength] = useState();


    const squareWidthCount = Math.floor(afghanWidth / squareWidth);
    const squareLengthCount = Math.floor(afghanLength / squareLength);
    const grannyCount = Math.floor(squareWidthCount * squareLengthCount);

    return (
        <>
            <div className="breadcrumbs">
                <ol>
                    <li><a href="/">Home</a></li>
                    <li>Granny Square Calculator</li>
                </ol>
                <h2>Granny Square Calculator</h2>
            </div>
            <div className="grannySquareCalculator">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <img src={slide3} alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <h3>Granny Square Calculator</h3>
                            <p className="fst-italic">
                                Lets Calculate How Many Squares We Want
                            </p>
                            <p>
                                I will calculate the number of squares you need. Tell me the measurements of the blanket/afghan that you want. Enter in the size of your square into the calculator. This will tell you how many squares you need to complete.
                            </p>
                        </div>
                    </div>

                </div>
                {/* <div>
                    <div>
                        <img src={slide3} width={10} alt="" />
                    </div>
                    <div>
                        <h3>Lets Calculate How Many Squares We Want</h3>
                        <p>
                            I will calculate the number of squares you need. Tell me the measurements of the blanket/afghan that you want. Enter in the size of your square into the calculator. This will tell you how many squares you need to complete.
                        </p>
                    </div>
                </div> */}
                <div>
                    <div>
                        <h3>Square Count Calculator</h3>
                        <span>Let's determine how many squares you will need to complete the size you want.</span>
                    </div>
                    <div className="container">
                        <h3>Common Afghan Sizes Are As Follows:</h3>
                        <div className="row no-gutters">
                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                <FontAwesomeIcon icon={faBabyCarriage} />
                                    <span className="custom-counter">Crib</span>
                                    <p><strong>36" x 54"</strong></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                <FontAwesomeIcon icon={faBaby} />
                                <span className="custom-counter">Baby Afghan</span>
                                    <p><strong>40" x 40"</strong></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                <FontAwesomeIcon icon={faBed} size="xs" />
                                <span className="custom-counter">Twin</span>
                                    <p><strong>39" x 75"</strong></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                <FontAwesomeIcon icon={faBed} size="sm" />                                    <span className="custom-counter">Double</span>
                                    <p><strong>54" x 75"</strong></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                <FontAwesomeIcon icon={faChessQueen} />
                                <span className="custom-counter">Queen</span>
                                    <p><strong>60" x 80"</strong></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                <FontAwesomeIcon icon={faChessKing} />
                                    <span className="custom-counter">King</span>
                                    <p><strong>76" x 80"</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div>
                        <h3>Common Afghan Sizes Are As Follows:</h3>
                        <h5>Crib 36" x 54", Baby Afghan 40" x 40", Twin 39" x 75", Double 54" x 75", Queen 60" x 80", King 76" x 80". These sizes don't include drape over the edges of the top of the mattress.</h5>
                    </div> */}
                    <div>
                        <label>How wide do you want your afghan to be? Please state to the nearest inch.</label>
                        <div>
                            <input type="number" value={afghanWidth} onChange={e => setAfghanWidth(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label>How long do you want your afghan to be? Please state to the nearest inch.</label>
                        <div>
                            <input type="number" value={afghanLength} onChange={e => setAfghanLength(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <label>How wide is your granny square? Please state to the nearest inch.</label>
                        <div>
                            <input type="number" value={squareWidth} onChange={e => setSquareWidth(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <label>How long is your granny square? Please state to the nearest inch.</label>
                        <div>
                            <input type="number" value={squareLength} onChange={e => setSquareLength(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <label>This is how many squares wide your afghan will be. Calculated to the nearest full square to get your size.</label>
                        <div>
                            <input type="text" value={squareWidthCount || 0} readOnly />
                        </div>
                    </div>
                    <div>
                        <label>This is how many squares long your afghan will be. Calculated to the nearest full square to get your size.</label>
                        <div>
                            <input type="text" value={squareLengthCount || 0} readOnly />
                        </div>
                    </div>
                    <div>
                        <label>Number of Squares Needed To Complete Your Size</label>
                        <div>
                            <input type="text" value={grannyCount || 0} readOnly />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SquareCalculator
