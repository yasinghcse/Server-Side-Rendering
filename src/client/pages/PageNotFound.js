import React from "react";

const PageNotFound = ({staticContext = {}}) => {
    staticContext.notFound = true;
    return (
        <div>
            Page not found !!!
        </div>
    );
}

export default {
    component: PageNotFound
};
