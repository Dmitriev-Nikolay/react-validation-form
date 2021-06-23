import React from 'react';

import { useFormik } from 'formik';

import * as Yup from 'yup';

const Home = React.memo(() => {

    // const SignupSchema = Yup.object().shape({
    //     fullNameLaboratory: Yup.string()
    //         .min(2, 'Too Short!')
    //         .max(50, 'Too Long!')
    //         .required('Required'),
    // });

    const initialValues = {
        fullNameLaboratory: '',
        shortNameLaboratory: '',
        email: '',
        phone: '',
        site: '',
        headSurname: '',
        headName: '',
        headPatronymic: '',
        country: '',
        postcode: '',
        region: '',
        city: '',
        locality: '',
        street: '',
        house: '',
    };

    const validate = (values) => {
        let errorsForm = {};
        if (!values.fullNameLaboratory) {
            errorsForm.fullNameLaboratory = 'Required';
        }
        return errorsForm;
    };

    const onSubmit = (values) => console.log(values);

    const formikForm = useFormik({
        initialValues,
        validate,
        onSubmit,
    });

    console.log(formikForm.errors);

    return (
        <div className="container">
            <h1>Validation-form</h1>
            <form onSubmit={ formikForm.handleSubmit }>
                <label>
                    Полное наименование испытательной лаборатории (центра):
                    <input
                        name="fullNameLaboratory"
                        type="text"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.fullNameLaboratory }
                    />
                    { formikForm.errors.fullNameLaboratory ? <div>{ formikForm.errors.fullNameLaboratory }</div> : null }
                </label>
                <label>
                    Сокращенное наименование испытательной лаборатории (центра)
                    <input
                        name="shortNameLaboratory"
                        type="text"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.shortNameLaboratory }
                    />
                </label>
                <label>
                    Адрес электронной почты (общий)
                    <input
                        name="email"
                        type="email"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.email }
                    />
                </label>
                <label>
                    Телефон
                    <input
                        name="phone"
                        type="tel"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.phone }
                    />
                </label>
                <label>
                    Сайт
                    <input
                        name="site"
                        type="url"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.site }
                    />
                </label>
                <h3>Руководитель</h3>
                <label>
                    Фамилия
                    <input
                        name="headSurname"
                        type="text"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.headSurname }
                    />
                </label>
                <label>
                    Имя
                    <input
                        name="headName"
                        type="text"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.headName }
                    />
                </label>
                <label>
                    Отчество
                    <input
                        name="headPatronymic"
                        type="text"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.headPatronymic }
                    />
                </label>
                <h3>Фактический адрес</h3>
                <label>
                    Страна
                    <input
                        name="country"
                        type="text"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.country }
                    />
                </label>
                <label>
                    Почтовый индекс 
                    <input
                        name="postcode"
                        type="text"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.postcode }
                    />
                </label>
                <label>
                    Регион/область 
                    <input
                        name="region"
                        type="text"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.region }
                    />
                </label>
                <label>
                    Город/район 
                    <input
                        name="city"
                        type="text"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.city }
                    />
                </label>
                <label>
                    Населенный пункт 
                    <input
                        name="locality"
                        type="text"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.locality }
                    />
                </label>
                <label>
                    Улица 
                    <input
                        name="street"
                        type="text"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.street }
                    />
                </label>
                <label>
                    Дом и офис 
                    <input
                        name="house"
                        type="text"
                        onChange={ formikForm.handleChange }
                        value={ formikForm.values.house }
                    />
                </label>
                <h3>Признание в системе</h3>
                <div className="container__recognition" >
                    <div>
                        <input name="recognition" type="radio" value="yes" />
                        <span>Есть</span>
                    </div>
                    <div>
                        <input name="recognition" type="radio" value="no" defaultChecked />
                        <span>Нет</span>
                    </div>
                </div>
                <button type="submit">Далее</button>
            </form>
        </div>
    );
});

export default Home;
