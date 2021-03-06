import React from 'react';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </React.Suspense>
    };
}