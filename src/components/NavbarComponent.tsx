import { Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NavbarComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">{t("Donate with Crypto")}</Navbar.Brand>
            </Navbar>
        </>
    );
};

export default NavbarComponent;