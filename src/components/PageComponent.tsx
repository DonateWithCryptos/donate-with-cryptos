import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import getTwitchData from '../utils/GenerateLink';
import { Image } from 'react-bootstrap';

const PageComponent = () => {
    const { t } = useTranslation();
    console.log(t);
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    const query = useQuery();
    const twitchData = getTwitchData(query.get("c"));
    console.log(twitchData);
    return (
        <>
            
        </>
    );
}

export default PageComponent;