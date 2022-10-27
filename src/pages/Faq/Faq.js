import React from 'react';

const Faq = () => {
    return (
        <div>
            <h2 className='text-center'>Frequently Ask Question</h2>
            <div className='faq_card p-4 shadow rounded my-4'>
                <h3>How does react work?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='faq_card p-4 shadow rounded my-4'>
                <h3>Difference between props and state</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div className='faq_card p-4 shadow rounded my-4'>
                <h3>What does useEffect do other than load data?</h3>
                <p>useEffect helping to solve asynchronous issue. Which need to set on the array in second parameter of useEffect. Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update. Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.</p>
            </div>
        </div>
    );
};

export default Faq;