import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from './redux/store';

const ResultA: React.FC = () => {
    const propA = useSelector(
        (state: RootState) => state.counter.propA,
        shallowEqual
    );

    console.log('Rendered Result A', { propA });

    return <div>Current value is {propA}</div>;
};

ResultA.whyDidYouRender = {
    logOnDifferentValues: true,
    trackHooks: true,
};

export default ResultA;
