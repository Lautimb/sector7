import React from "react";
import { Link } from "react-router-dom";

export const ConditionalLinkContainer = ({ withLink, children, to }) => {
    return <>{withLink ? <Link to={to}>{children}</Link> : <>{children}</>}</>;
};
