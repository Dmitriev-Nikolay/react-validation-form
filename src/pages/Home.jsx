import React from 'react';

import { useFormik } from 'formik';

// import * as Yup from 'yup';

import FocusError from '../components/FocusErorr';

const Home = React.memo(() => {

    const [stateVisibleHead, setVisibleHead] = React.useState(false);
    const [stateVisibleAddress, setVisibleAddress] = React.useState(false);
    const [chekedActualAddress, setchekedActualAddress] = React.useState(false);

    const selectCheckboxAddress = () => {
        setchekedActualAddress(!chekedActualAddress);
    };

    const viewHead = () => {
        setVisibleHead(!stateVisibleHead);
    };

    const viewAddressForm = () => {
        setVisibleAddress(!stateVisibleAddress);
    };

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
            errorsForm.fullNameLaboratory = 'Поле обязательно к заполнению';
        }
        if (!values.shortNameLaboratory) {
            errorsForm.shortNameLaboratory = 'Поле обязательно к заполнению';
        }
        if (!values.email) {
            errorsForm.email = 'Поле обязательно к заполнению';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errorsForm.email = 'Допукаются латинские буквы, цифры и символы (.@-_)';
        }
        if (!values.phone) {
            errorsForm.phone = 'Поле обязательно к заполнению';
        }
        if (!values.site) {
            errorsForm.site = 'Поле обязательно к заполнению';
        }
        if (!values.headSurname) {
            errorsForm.headSurname = 'Поле обязательно к заполнению';
            setVisibleHead(true);
        }
        if (!values.headName) {
            errorsForm.headName = 'Поле обязательно к заполнению';
            setVisibleHead(true);
        }
        if (!values.headPatronymic) {
            errorsForm.headPatronymic = 'Поле обязательно к заполнению';
            setVisibleHead(true);
        }
        if (!values.country) {
            errorsForm.country = 'Поле обязательно к заполнению';
            setVisibleAddress(true);
        }
        if (!values.postcode) {
            errorsForm.postcode = 'Поле обязательно к заполнению';
            setVisibleAddress(true);
        }
        if (!values.region) {
            errorsForm.region = 'Поле обязательно к заполнению';
            setVisibleAddress(true);
        }
        if (!values.city) {
            errorsForm.city = 'Поле обязательно к заполнению';
            setVisibleAddress(true);
        }
        if (!values.locality) {
            errorsForm.locality = 'Поле обязательно к заполнению';
            setVisibleAddress(true);
        }
        if (!values.street) {
            errorsForm.street = 'Поле обязательно к заполнению';
            setVisibleAddress(true);
        }
        if (!values.house) {
            errorsForm.house = 'Поле обязательно к заполнению';
            setVisibleAddress(true);
        }
        return errorsForm;
    };

    const onSubmit = (values) => {
        console.log(values);
    }

    const formikForm = useFormik({
        initialValues,
        validate,
        onSubmit,
    });

    // console.log(formikForm.errors);
    // console.log(formikForm.isSubmitting);
    // console.log(formikForm.isValidating);

    return (
        <div className="container">
            <h1>Validation-form</h1>
            <form onSubmit={ formikForm.handleSubmit }>
                <label>
                    <p>Полное наименование испытательной лаборатории (центра):</p>
                    <div>
                        <input
                            name="fullNameLaboratory"
                            type="text"
                            onChange={ formikForm.handleChange }
                            value={ formikForm.values.fullNameLaboratory }
                            onBlur={ formikForm.handleBlur }
                        />
                        { formikForm.touched.fullNameLaboratory && formikForm.errors.fullNameLaboratory ? <div>{ formikForm.errors.fullNameLaboratory }</div> : null }
                    </div>
                </label>
                <label>
                    <p>Сокращенное наименование испытательной лаборатории (центра)</p>
                    <div>
                        <input
                            name="shortNameLaboratory"
                            type="text"
                            onChange={ formikForm.handleChange }
                            value={ formikForm.values.shortNameLaboratory }
                            onBlur={ formikForm.handleBlur }
                        />
                        { formikForm.touched.shortNameLaboratory && formikForm.errors.shortNameLaboratory ? <div>{ formikForm.errors.shortNameLaboratory }</div> : null }
                    </div>
                </label>
                <label>
                    <p>Адрес электронной почты (общий)</p>
                    <div>
                        <input
                            name="email"
                            type="email"
                            onChange={ formikForm.handleChange }
                            value={ formikForm.values.email }
                            onBlur={ formikForm.handleBlur }
                        />
                        { formikForm.touched.email && formikForm.errors.email ? <div>{ formikForm.errors.email }</div> : null }
                    </div>
                </label>
                <label>
                    <p>Телефон</p>
                    <div>
                        <input
                            name="phone"
                            type="tel"
                            onChange={ formikForm.handleChange }
                            value={ formikForm.values.phone }
                            onBlur={ formikForm.handleBlur }
                        />
                        { formikForm.touched.phone && formikForm.errors.phone ? <div>{ formikForm.errors.phone }</div> : null }
                    </div>
                </label>
                <label>
                    <p>Сайт</p>
                    <div>
                        <input
                            name="site"
                            type="text"
                            onChange={ formikForm.handleChange }
                            value={ formikForm.values.site }
                            onBlur={ formikForm.handleBlur }
                        />
                        { formikForm.touched.site && formikForm.errors.site ? <div>{ formikForm.errors.site }</div> : null }
                    </div>
                </label>
                <div className="container__popup-form" onClick={ viewHead } > 
                    <h3>Руководитель</h3>
                    <svg className={ stateVisibleHead ? 'rotate' : '' } width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 
                            0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 
                            0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C" 
                        />
                    </svg>
                </div>
                {  stateVisibleHead && 
                    <>
                        <label>
                            <p>Фамилия</p>
                            <div>
                                <input
                                    name="headSurname"
                                    type="text"
                                    onChange={ formikForm.handleChange }
                                    value={ formikForm.values.headSurname }
                                    onBlur={ formikForm.handleBlur }
                                />
                                { formikForm.touched.headSurname && formikForm.errors.headSurname ? <div>{ formikForm.errors.headSurname }</div> : null }
                            </div>
                        </label>
                        <label>
                            <p>Имя</p>
                            <div>
                                <input
                                    name="headName"
                                    type="text"
                                    onChange={ formikForm.handleChange }
                                    value={ formikForm.values.headName }
                                    onBlur={ formikForm.handleBlur }
                                />
                                { formikForm.touched.headName && formikForm.errors.headName ? <div>{ formikForm.errors.headName }</div> : null }
                            </div>
                        </label>
                        <label>
                            <p>Отчество</p>
                            <div>
                                <input
                                    name="headPatronymic"
                                    type="text"
                                    onChange={ formikForm.handleChange }
                                    value={ formikForm.values.headPatronymic }
                                    onBlur={ formikForm.handleBlur }
                                />
                                { formikForm.touched.headPatronymic && formikForm.errors.headPatronymic ? <div>{ formikForm.errors.headPatronymic }</div> : null }
                            </div>
                        </label>
                    </>
                }
                <div className="container__popup-form" onClick={ viewAddressForm } > 
                    <h3>Фактический адрес</h3>
                    <svg className={ stateVisibleAddress? 'rotate' : '' } width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 
                            0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 
                            0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C" 
                        />
                    </svg>
                </div>
                { stateVisibleAddress && 
                    <>  
                        <div className="container__label">
                            <label>
                                <div>
                                    <input type="checkbox" onClick={ selectCheckboxAddress } defaultChecked={ chekedActualAddress } />
                                    <p>Совпадает с фактическим адресом организации</p>
                                </div>
                            </label>
                        </div>
                        { !chekedActualAddress &&
                            <>
                                <label>
                                    <p>Страна</p>
                                    <div>
                                        <input
                                            name="country"
                                            type="text"
                                            onChange={ formikForm.handleChange }
                                            value={ formikForm.values.country }
                                            onBlur={ formikForm.handleBlur }
                                        />
                                        { formikForm.touched.country && formikForm.errors.country ? <div>{ formikForm.errors.country }</div> : null }
                                    </div>
                                </label>
                                <label>
                                    <p>Почтовый индекс</p>
                                    <div>
                                        <input
                                            name="postcode"
                                            type="text"
                                            onChange={ formikForm.handleChange }
                                            value={ formikForm.values.postcode }
                                            onBlur={ formikForm.handleBlur }
                                        />
                                        { formikForm.touched.postcode && formikForm.errors.postcode ? <div>{ formikForm.errors.postcode }</div> : null }
                                    </div>
                                </label>
                                <label>
                                    <p>Регион/область</p>
                                    <div>
                                        <input
                                            name="region"
                                            type="text"
                                            onChange={ formikForm.handleChange }
                                            value={ formikForm.values.region }
                                            onBlur={ formikForm.handleBlur }
                                        />
                                        { formikForm.touched.region && formikForm.errors.region ? <div>{ formikForm.errors.region }</div> : null }
                                    </div>
                                </label>
                                <label>
                                    <p>Город/район</p> 
                                    <div>
                                        <input
                                            name="city"
                                            type="text"
                                            onChange={ formikForm.handleChange }
                                            value={ formikForm.values.city }
                                            onBlur={ formikForm.handleBlur }
                                        />
                                        { formikForm.touched.city && formikForm.errors.city ? <div>{ formikForm.errors.city }</div> : null }
                                    </div>
                                </label>
                                <label>
                                    <p>Населенный пункт</p> 
                                    <div>
                                        <input
                                            name="locality"
                                            type="text"
                                            onChange={ formikForm.handleChange }
                                            value={ formikForm.values.locality }
                                            onBlur={ formikForm.handleBlur }
                                        />
                                        { formikForm.touched.locality && formikForm.errors.locality ? <div>{ formikForm.errors.locality }</div> : null }
                                    </div>
                                </label>
                                <label>
                                    <p>Улица</p>
                                    <div>
                                        <input
                                            name="street"
                                            type="text"
                                            onChange={ formikForm.handleChange }
                                            value={ formikForm.values.street }
                                            onBlur={ formikForm.handleBlur }
                                        />
                                        { formikForm.touched.street && formikForm.errors.street ? <div>{ formikForm.errors.street }</div> : null }
                                    </div>
                                </label>
                                <label>
                                    <p>Дом и офис</p>
                                    <div>
                                        <input
                                            name="house"
                                            type="text"
                                            onChange={ formikForm.handleChange }
                                            value={ formikForm.values.house }
                                            onBlur={ formikForm.handleBlur }
                                        />
                                        { formikForm.touched.house && formikForm.errors.house ? <div>{ formikForm.errors.house }</div> : null }
                                    </div>
                                </label>
                            </>
                        }
                    </>
                }
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
            <FocusError 
                errorsForm={ formikForm.errors } 
                isSubmitting={ formikForm.isSubmitting } 
                isValidating={ formikForm.isValidating } 
            />
        </div>
    );
});

export default Home;
