import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from './redux/store';

const ResultB: React.FC = () => {
    const { propB, someText } = useSelector((state: RootState) => {
        const { propB, someText } = state.counter;
        return { propB, someText };
    }, shallowEqual);

    console.log('Rendered Result B', { propB, someText });

    return <div>Current value is {propB}</div>;
};

ResultB.whyDidYouRender = {
    logOnDifferentValues: true,
};

export default ResultB;
