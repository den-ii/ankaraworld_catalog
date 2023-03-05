import styled from "styled-components";

export const ContactContainer = styled.section`
.contact--leading{
    margin: 1rem 0 2rem;
}
label{
    display: block;
}
.contact--form__text{
    display: block;
    width: 100%;
    padding: 0.7rem;
    border-radius: 7px;
    border: 1px solid var(--primary);
    font-size: 1.4rem;
    margin-bottom: 1rem;
}
.contact--form__textarea{
    width: 100%;
    height: 150px;
    padding: 0.7rem;
    margin-bottom: 1rem;
    border-radius: 7px;
    font-size: 1.2rem !important;
}

.checkbox--label{
    display: inline;
    margin-left: 1rem;
}
.contact--form__submit{
    width: 100%;
    text-align: center;
    padding: 0.7rem;
    margin: 3rem 0;
    border-radius: 7px;
    color: white;
    font-weight: 800;
    border: 1px solid var(--primary);
    background: var(--primary);
    font-size: 1.3rem;
}
.contact--form__submit:hover{
    color: var(--primary);
    background: white;

}
.error{
    border: 1px solid red;
    outline: none;
}
.t_error{
    color: red;
}
.when_submitted{
    color: green;
}

@media screen and (min-width: 700px){
max-width: 600px;
margin-left: auto;
margin-right: auto;
.contact--form__text{
    
    font-size: 1.6rem;
}
.contact--form__textarea{
    width: 100%;
    height: 150px;
    padding: 0.7rem;
    margin-bottom: 1rem;
    border-radius: 7px;
    font-size: 1.5rem !important;
}

.contact--form__submit{
    font-size: 1.6rem;
}
}
`