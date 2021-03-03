import { useTranslation } from 'react-i18next';
import { Form, Button } from 'react-bootstrap';

const CreatePageComponent = () => {
    const { t } = useTranslation();
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>{t("Twitch Channel")}</Form.Label>
                <Form.Control type="text" placeholder={t('Enter Twitch Channel')} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>{t("Address")}</Form.Label>
                <Form.Control type="text" placeholder="0000000000000000000000000000000000" />
            </Form.Group>
            <Button variant="primary" type="submit">
                {t("Submit")}
            </Button>
        </Form>
    );
};

export default CreatePageComponent;