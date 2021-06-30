import React from 'react';
// import { useFormikContext } from 'formik';

const FocusError = ({ errorsForm, isSubmitting, isValidating }) => {
// console.log(errorsForm);
    React.useEffect(() => {
        if (isSubmitting && !isValidating) {
            let keys = Object.keys(errorsForm);
            if (keys.length > 0) {
                const selector = `[name=${ keys[0] }]`;
                const errorElement = document.querySelector(selector);
                if (errorElement) {
                    // errorElement.focus();
                    // errorElement.scrollIntoView({behavior: "smooth"});
                    
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = errorElement.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    window.scrollTo({
                        top: elementPosition + 15,
                        behavior: "smooth"
                    });
                };
            };
        };
    }, [errorsForm, isSubmitting, isValidating]);
    return null;
};

export default FocusError;