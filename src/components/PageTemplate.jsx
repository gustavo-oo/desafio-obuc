import Sidebar from './Sidebar';

import donaMariaLogo from "../assets/donamaria.png"

import "../styles/components/PageTemplate.scss"

const PageTemplate = ({ children, childrenClassName }) => (
    <div className="page-template-container">
        <Sidebar />
        <div className={childrenClassName}>
            {children}
        </div>
        <img
            alt="Dona Maria"
            className="page-template-fixed-logo"
            src={donaMariaLogo}
        />
    </div>
)

export default PageTemplate;
