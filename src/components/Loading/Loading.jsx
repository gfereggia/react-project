import React from 'react';
import Loader from 'react-loader-spinner';

//style
import './Loading.scss';

const Loading = ({type, color, height, width, clase}) => {
    return (
        <div className={clase ? clase : "loading"}>
            <Loader
                type={type ? type : "RevolvingDot"}
                color={color ? color : "#0070E0"}
                height={height ? height : "100"}
                width={width ? width : "100"}
            />
        </div>
    );
}

export default Loading;