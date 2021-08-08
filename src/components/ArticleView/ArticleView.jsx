// npm packages
import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';


// files
import './ArticleView.scss'
import env from './../../env.json'
import ArticleCard from './ArticleCard/ArticleCard'

// strapi 
const strapi = new Strapi('http://localhost:1337');

class Posts extends React.Component {
    state = {
        posts: [],
        imageLocation: ""
    }; 
    async componentDidMount() {

        try {
            var out = await strapi.getEntries('blog-posts')
            var posts = out[this.props.id];
            this.setState({ posts });
            const imageLocation = (`${env.domain.api}${this.state.posts.thumbnail.formats.medium.url}`);
            this.setState({imageLocation})
        } 
        catch (err) {
            alert(err);
        }
    }

  render() {
    return (
        <div className="ArticleView">
                    <svg className="waves waves-top" width="120%" viewBox="0 0 1440 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d)">
                                <path d="M-15 77.3433L19.7583 72.8857C54.5167 68.3243 124.033 59.409 193.227 58.165C262.582 56.921 331.452 63.5557 400.807 66.4583C470 69.361 539.517 68.739 608.71 51.1157C678.065 33.4923 746.935 -1.13235 816.29 0.629983C885.483 2.39232 955 40.3343 1024.19 50.701C1093.55 61.0677 1162.42 43.859 1231.77 34.529C1300.97 25.199 1370.48 23.7476 1405.24 23.1256L1440 22.4V209H1405.24C1370.48 209 1300.97 209 1231.77 209C1162.42 209 1093.55 209 1024.19 209C955 209 885.483 209 816.29 209C746.935 209 678.065 209 608.71 209C539.517 209 470 209 400.807 209C331.452 209 262.582 209 193.227 209C124.033 209 54.5167 209 19.7583 209H-15V77.3433Z" fill="#29423F"/>
                                <path d="M-15 121.92L19.7583 113.108C54.5167 104.297 124.033 86.6733 193.227 89.9907C262.582 93.2043 331.452 117.462 400.807 124.719C470 131.976 539.517 122.231 608.71 114.871C678.065 107.407 746.935 102.223 816.29 99.1133C885.483 96.0033 955 94.9667 1024.19 100.668C1093.55 106.37 1162.42 118.81 1231.77 118.499C1300.97 118.084 1370.48 105.022 1405.24 98.3877L1440 91.8567V209H1405.24C1370.48 209 1300.97 209 1231.77 209C1162.42 209 1093.55 209 1024.19 209C955 209 885.483 209 816.29 209C746.935 209 678.065 209 608.71 209C539.517 209 470 209 400.807 209C331.452 209 262.582 209 193.227 209C124.033 209 54.5167 209 19.7583 209H-15V121.92Z" fill="#314E4B"/>
                            </g>
                            <defs>
                                <filter id="filter0_d" x="-19" y="0.565186" width="1463" height="216.435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                </filter>
                            </defs>
                    </svg>  
                        <div className="posts">
                            <ArticleCard date={this.state.posts.published_at} image={this.state.imageLocation} title={this.state.posts.title} description={this.state.posts.description}/>
                        </div>
                    <svg className="waves waves-bottom" width="120%" viewBox="0 0 1440 216" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M0 131.382L34.4016 135.83C68.8033 140.383 137.597 149.279 206.083 150.52C274.718 151.762 342.878 145.141 411.523 142.245C480 139.348 548.8 139.968 617.28 157.555C685.92 175.142 754.08 209.694 822.72 207.935C891.2 206.177 960 168.314 1028.48 157.969C1097.12 147.623 1165.28 164.797 1233.92 174.107C1302.4 183.418 1371.2 184.866 1405.6 185.486L1440 186.211V0H1405.6C1371.2 0 1302.4 0 1233.92 0C1165.28 0 1097.12 0 1028.48 0C960 0 891.2 0 822.72 0C754.08 0 685.92 0 617.28 0C548.8 0 480 0 411.523 0C342.878 0 274.718 0 206.083 0C137.597 0 68.8033 0 34.4016 0H0V131.382Z" fill="#29423F"/>
<path d="M8.9407e-07 86.7741L34.4017 95.5552C68.8033 104.335 137.597 121.897 206.083 118.591C274.718 115.389 342.878 91.2165 411.523 83.985C480 76.7534 548.8 86.4642 617.28 93.7984C685.92 101.236 754.08 106.402 822.72 109.501C891.2 112.6 960 113.632 1028.48 107.951C1097.12 102.269 1165.28 89.8732 1233.92 90.1831C1302.4 90.5966 1371.2 103.613 1405.6 110.223L1440 116.732V3.11003e-06H1405.6C1371.2 3.11003e-06 1302.4 3.11003e-06 1233.92 3.11003e-06C1165.28 3.11003e-06 1097.12 3.11003e-06 1028.48 3.11003e-06C960 3.11003e-06 891.2 3.11003e-06 822.72 3.11003e-06C754.08 3.11003e-06 685.92 3.11003e-06 617.28 3.11003e-06C548.8 3.11003e-06 480 3.11003e-06 411.523 3.11003e-06C342.878 3.11003e-06 274.718 3.11003e-06 206.083 3.11003e-06C137.597 3.11003e-06 68.8033 3.11003e-06 34.4017 3.11003e-06H8.9407e-07V86.7741Z" fill="#314E4B"/>
</g>
<defs>
<filter id="filter0_d" x="-4" y="0" width="1448" height="216" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
            </div>
      );
};
}
export default Posts;