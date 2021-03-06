<div className="contactusform">
            <div className="contactusform__details">
            <div className="aboutusform__about">
                            <div className="aboutus__header" style={{
                                textAlign:"center"
                            }}>
                                <h2 style={{
                                    color:" #E8580C"
                                }}>Contact Us</h2>
                            </div>
                            </div>
                {/*sign updetails */}
                <div className="signup__detail">

                    {/*signup form */}
                    <Formik
                        validationSchema={SignUpSchema}
                        initialValues={initialValues}
                        onSubmit={(values, { resetForm }) => submitValues(values, resetForm)}
                    >
                        {
                            ({ errors, touched, isSubmitting }) => (
                                <Box>
                                    <Form className="app__form">
                                        {/*firstname */}
                                        <FormControl className="signup__firstName">
                                            <Field name="firstName"
                                                as={TextField}
                                                fullWidth={true}
                                                className="mobile__viewFirstName"
                                                variant={!errors.firstName && touched.firstName ? "filled" : "outlined"}
                                                error={errors.firstName && touched.firstName}
                                                placeholder="enter first Name"
                                                size="small"
                                                label="FirstName" />

                                            {errors.firstName && touched.firstName &&
                                                <ErrorMessage name="firstName" component="span" className="error" />}


                                        </FormControl>
                                        {/*last name */}
                                        <FormControl className="signup__secondName">
                                            <Field name="lastName"
                                                as={TextField}
                                                variant={!errors.lastName && touched.lastName ? "filled" : "outlined"}
                                                error={errors.lastName && touched.lastName}
                                                placeholder="enter last Name"
                                                size="small"
                                                label="Last Name" />

                                            {errors.lastName && touched.lastName &&
                                                <ErrorMessage name="lastName" component="span" className="error" />}



                                        </FormControl>

                                        {/*email */}
                                        <FormControl className="signup__email">
                                            <Field
                                                name="email"
                                                type="email"
                                                as={TextField}
                                                variant={!errors.email && touched.email ? "filled" : "outlined"}
                                                error={errors.email && touched.email}
                                                label="Email"
                                                placeholder="enter email"
                                                size="small"
                                            />
                                            {errors.email && touched.email &&
                                                <ErrorMessage name="email" component="span" className="error" />}
                                        </FormControl>

                                        {/*signup phonenumber */}
                                        <FormControl className="signup__phoneNumber">
                                            <PhoneInput
                                                country={'ug'}
                                                value={phone}
                                                inputStyle={{
                                                    width: "100%"
                                                }}
                                                containerClass="signup__phone"
                                                onChange={(phone) => setPhone(phone)}
                                                onlyCountries={["ug"]}
                                                inputProps={{
                                                    name: 'phone',
                                                    required: true,
                                                    placeholder: "Phone"


                                                }}
                                                countryCodeEditable={false}
                                                isValid={(value, country) => {
                                                    if (value.length > 2 && value.length < 13) {

                                                        return true;
                                                    }
                                                    else {
                                                        return `only 9 digits required for ${country.name}`
                                                    }
                                                }}
                                            />
                                        </FormControl>

                                        {/*confirm password */}

                                        {/*country */}
                                        <FormControl className="signup__email">
                                            <Field
                                                name="country"
                                                type="text"
                                                as={TextField}
                                                variant={!errors.country && touched.country ? "filled" : "outlined"}
                                                error={errors.country && touched.country}
                                                label="country"
                                                placeholder="enter country"
                                                size="small"
                                            />
                                            {errors.country && touched.country &&
                                                <ErrorMessage name="country" component="span" className="error" />}
                                        </FormControl>
                                        {/*country */}
                                        {/*city */}

                                        <FormControl className="signup__email">
                                            <Field
                                                name="city"
                                                type="text"
                                                as={TextField}
                                                variant={!errors.city && touched.city ? "filled" : "outlined"}
                                                error={errors.city && touched.city}
                                                label="city"
                                                placeholder="enter city"
                                                size="small"
                                            />
                                            {errors.city && touched.city &&
                                                <ErrorMessage name="city" component="span" className="error" />}
                                        </FormControl>
                                        {/*city */}

                                        {/*here us about */}
                                        <FormControl className="signup__email">
                                            <Field
                                                name="hereUsAbout"
                                                type="text"
                                                as={TextField}
                                                variant={!errors.hereUsAbout && touched.hereUsAbout ? "filled" : "outlined"}
                                                error={errors.hereUsAbout && touched.hereUsAbout}
                                                label="Where did u here us about"
                                                placeholder="enter hereUsAbout"
                                                size="small"
                                            />
                                            {errors.hereUsAbout && touched.hereUsAbout &&
                                                <ErrorMessage name="hereUsAbout" component="span" className="error" />}
                                        </FormControl>
                                        {/*here us about */}
                                        {/*message */}
                                        <FormControl className="signup__email">
                                            <Field
                                                name="message"
                                                type="text"
                                                as={TextareaAutosize}
                                                error={errors.message && touched.message}
                                                label="Where did u here us about"
                                                placeholder="enter message"
                                                rowsMax={4}
                                                size="small"
                                                aria-label="maximum height"
                                                style={{
                                                    height:"70px"
                                                }}
                                            />
                                            {errors.message && touched.message &&
                                                <ErrorMessage name="message" component="span" className="error" />}
                                        </FormControl>
                                        {/*message */}

                                        <FormControl className="signup__button">
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                disabled={isSubmitting}
                                                color="primary">Send</Button>

                                        </FormControl>


                                    </Form>


                                </Box>)
                        }

                    </Formik>

                    {/*signup form */}

                </div>
                {/*sign up details */}

            </div>
        </div>