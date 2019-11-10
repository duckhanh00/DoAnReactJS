import React, { Component } from 'react'
import "../DetailMovies/DetailMovies.scss";
import { NavLink } from 'react-router-dom';
import Movies from '../Movies/Movies.js';
import PeopleCarousel from '../PeopleCarousel/PeopleCarousel';
import Trailers from '../Trailers/Trailers';
import * as action from "../../actions/movieActions/getDetails"
import * as action2 from "../../actions/movieActions/getReviews";
import { connect } from 'react-redux'
class DetailMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true
        }
    }
    shortText = (str) => {
        // const strArr = str.split(' ');
        return str.split(' ').length<50 ? str : str.split(".").splice(0,5).join("...")  // dua chuoi thanh mang
    }
    handleShareButton = () => {
        // let toggle = {...this.state.toggle}
        // this.setState = ({
        //     toggle: false
        // })
        // document.querySelector('.item-details-header-info-share-buttons').classList.toggle('.item-details-header-info-share-buttons__hide')
        document.querySelector('.item-details-header-info-share-buttons').classList.toggle('item-details-header-info-share-buttons__hide');
    }
    componentDidMount() {
        console.log('detail props', this.props)
        let id = this.props.match.params.id
        // id == undefined 
        this.props.onSaveDetails(id)
        this.props.onSaveReviews(id)
        console.log(this.props.details)
    }
    render() {
        let { details } = this.props
        let { reviews } = this.props
        console.log(reviews.results)
        return (
            <div className="item-details" id="item-details-top">
                <header
                    className="item-details-header-info"
                    style={{
                        background:
                            `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, url(https://image.tmdb.org/t/p/original/${details.poster_path}) center top no-repeat rgb(255, 255, 255)`
                    }}
                >
                    <div className="item-details-header-info-nav">
                        <NavLink to="/">
                            <svg
                                className="item-details-header-info-nav__icon wow fadeInLeft"
                                data-wow-delay=".2s"
                                data-wow-duration="2s"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "2s",
                                    animationDelay: "0.2s",
                                    animationName: "fadeInLeft"
                                }}
                            >
                                <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
                            </svg>
                        </NavLink>
                        <svg
                            className="item-details-header-info-nav__icon wow fadeInLeft"
                            data-wow-delay=".5s"
                            data-wow-duration="2s"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            onClick={this.handleShareButton}
                            style={{
                                visibility: "visible",
                                animationDuration: "2s",
                                animationDelay: "0.5s",
                                animationName: "fadeInLeft"
                            }}
                        >
                            <path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z" />
                        </svg>
                    </div>
                    {/* <div onClick={this.showShareButton} className={`item-details-header-info-share-buttons ${this.state.toggle ? "item-details-header-info-share-buttons__hide" : ""} `} > */}
                    <div className="item-details-header-info-share-buttons item-details-header-info-share-buttons__hide">
                        <a onClick={this.handleShareButton}><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /> </a>
                        <a onClick={this.handleShareButton}><img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" /> </a>
                        <a onClick={this.handleShareButton}><img src="https://simplesharebuttons.com/images/somacro/reddit.png" alt="Reddit" /></a>
                        <a onClick={this.handleShareButton}><img src="https://simplesharebuttons.com/images/somacro/tumblr.png" alt="Tumblr" /></a>
                        <a onClick={this.handleShareButton}><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a>
                    </div>
                    <div className="item-details-header-info-container">
                        <img
                            className="item-details-header-info-container-image"
                            src={`https://image.tmdb.org/t/p/w92/${details.poster_path}`}
                            alt="Terminator: Dark Fate"
                        />
                        <div className="item-details-header-info-container-content">
                            <h1 className="item-details-header-info-container-content__title">
                                {details.original_title}
                            </h1>
                            <div className="item-details-header-info-container-content-rating">
                                <p className="item-details-header-info-container-content-rating__digit">
                                    6.6
                    </p>
                                <div className="star-rating-container">
                                    <svg
                                        className="star-rating-container__item star-rating-container__item--active"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
                                    </svg>
                                    <svg
                                        className="star-rating-container__item star-rating-container__item--active"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
                                    </svg>
                                    <svg
                                        className="star-rating-container__item star-rating-container__item--active"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
                                    </svg>
                                    <svg
                                        className="star-rating-container__item"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
                                    </svg>
                                    <svg
                                        className="star-rating-container__item"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="item-details-header-info-container-content__detail">
                                {details.status} | {details.original_language}
                            </p>
                            <p className="item-details-header-info-container-content__genre">
                                {details.genres ? `${details.genres[0] ? details.genres[0].name : ''}` + `${details.genres[1] ? ' | ' + details.genres[1].name : ''}` : ''}
                            </p>
                            <svg
                                className="item-details-header-info-container-content__favorite wow pulse"
                                data-wow-delay=".5s"
                                data-wow-duration="2s"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "2s",
                                    animationDelay: "0.5s",
                                    animationName: "pulse"
                                }}
                            >
                                <path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z" />
                            </svg>
                        </div>
                    </div>
                </header>
                <main className="item-details-main">
                    <div className="item-details-main-summary">
                        <h2
                            className="item-details-main-summary__title wow fadeInLeft"
                            data-wow-delay=".2s"
                            data-wow-duration="1s"
                            style={{
                                visibility: "visible",
                                animationDuration: "1s",
                                animationDelay: "0.2s",
                                animationName: "fadeInLeft"
                            }}
                        >
                            Summary
                </h2>
                        <p className="item-details-main-summary__content">
                            {details.overview}
                        </p>
                    </div>
                    <PeopleCarousel People={this.props.details} />
                    <Trailers Trailers={this.props.details} />
                    <div className="item-details-main-reviews">
                        <h2 className="item-details-main-reviews__title wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1s">Popular Reviews</h2>
                            {/* check null de duyet reviews */}
                        {reviews.total_results > 0 ? reviews.results.map(reviews =>
                            (<div key={reviews.url} className="item-details-main-reviews-container">
                                <h3 className="item-details-main-reviews-container__author">{reviews.author}</h3>
                                <p className="item-details-main-reviews-container__content">{this.shortText(reviews.content)}</p>
                                <a className="item-details-main-reviews-container__link" href={reviews.url} target="_blank">
                                    <p>See full review</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" /></svg>
                                </a>
                            </div>)
                        ) :
                            (<div className="item-details-main-reviews-container">
                                <p className="item-details-main-reviews-container__error">No reviews found :(</p>
                            </div>)
                        }

                    </div>
                </main>
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        details: state.getDetails.result,
        reviews: state.getReviews.result
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSaveDetails: id => {
            // em thiếu id
            dispatch(action.getDetailsAPI(id))
        },
        onSaveReviews: id => {
            dispatch(action2.getReviewsAPI(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovies)