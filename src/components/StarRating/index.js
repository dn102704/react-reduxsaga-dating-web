import React from 'react'
import PropTypes from 'prop-types';

const StarRating = ({rating}) => {
  return (
    <svg width="139px" height="24px" viewBox="0 0 139 24" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-713.000000, -2507.000000)">
                <g transform="translate(120.000000, 244.000000)">
                    <g transform="translate(510.000000, 2081.000000)">
                        <g transform="translate(16.000000, 24.000000)">
                            <g transform="translate(67.000000, 1.000000)">
                                <g transform="translate(0.000000, 72.000000)">
                                    <g transform="translate(0.000000, 80.000000)">
                                        <g transform="translate(0.000000, 5.000000)">
                                        <g>
                                            <path stroke="#ED1651" fill={(rating - 0 > 0) && "#ED1651"} strokeWidth="1" d="M18.5039691,22.7320187 L16.2031696,14.7241505 L22.5750004,9.63746163 L14.5810358,9.465927 L11.9827586,1.59503176 L9.38448147,9.465927 L1.39051685,9.63746163 L7.76234759,14.7241505 L5.46154816,22.7320187 L11.9827586,17.9537674 L18.5039691,22.7320187 Z"></path>,
                                            <path stroke="#ED1651" fill={(rating - 1 > 0) && "#ED1651"} strokeWidth="1" d="M47.2625898,22.7320187 L44.9617903,14.7241505 L51.3336211,9.63746163 L43.3396565,9.465927 L40.7413793,1.59503176 L38.1431022,9.465927 L30.1491375,9.63746163 L36.5209683,14.7241505 L34.2201688,22.7320187 L40.7413793,17.9537674 L47.2625898,22.7320187 Z"></path>,
                                            <path stroke="#ED1651" fill={(rating - 2 > 0) && "#ED1651"} strokeWidth="1" d="M76.0107077,21.5677617 L73.7138173,13.9732119 L80.0348105,9.17941234 L72.104217,9.01774627 L69.5,1.523302 L66.895783,9.01774627 L58.9651895,9.17941234 L65.2861827,13.9732119 L62.9892923,21.5677617 L69.5,17.0357338 L76.0107077,21.5677617 Z"></path>,
                                            <path stroke="#ED1651" fill={(rating - 3 > 0) && "#ED1651"} strokeWidth="1" d="M104.769328,21.5677617 L102.472438,13.9732119 L108.793431,9.17941234 L100.862838,9.01774627 L98.2586207,1.523302 L95.6544037,9.01774627 L87.7238102,9.17941234 L94.0448034,13.9732119 L91.747913,21.5677617 L98.2586207,17.0357338 L104.769328,21.5677617 Z"></path>,
                                            <path stroke="#ED1651" fill={(rating - 4 > 0) && "#ED1651"} strokeWidth="1" d="M133.527949,21.5677617 L131.231059,13.9732119 L137.552052,9.17941234 L129.621458,9.01774627 L127.017241,1.523302 L124.413024,9.01774627 L116.482431,9.17941234 L122.803424,13.9732119 L120.506534,21.5677617 L127.017241,17.0357338 L133.527949,21.5677617 Z"></path>                                              
                                        </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number
}

export default StarRating;

