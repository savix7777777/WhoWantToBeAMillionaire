import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';


const GainPanel = ({mobile, indexV, data}) => {

    const [gainsArray, setGainsArray] = useState();

    useEffect(() => {
        const newData = data.slice();
        newData.reverse()
        setGainsArray(newData);
    },[data]);

    return(
        <div className={`gain-panel ${mobile && 'gain-panel-phone'}`}>
            {gainsArray && gainsArray.map((elem,index) => {
                return(
                    <div
                        key={index}
                        className={`
                        gain-panel__gain 
                        ${11-index < indexV && 'gain-panel__gain-passed '}
                        ${11-index === indexV && 'gain-panel__gain-actual '}
                        ${11-index > indexV && 'gain-panel__gain-future '}
                        `}
                    ><p>{elem.gain}</p></div>
                )
            })}
        </div>
    );
};

GainPanel.propTypes = {
    data: PropTypes.array.isRequired,
    indexV: PropTypes.number.isRequired,
    mobile: PropTypes.bool,
};

GainPanel.defaultProps = {
    data: [],
    indexV: 1,
    mobile: false,
}

export default GainPanel;