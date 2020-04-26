<template>
<div class="main-nav-container">
    <md-content class="main-nav md-scrollbar md-theme-default">
        <div class="main-nav-content">
            <div class="main-nav-level">
                <a href="#">
                    <div class="country-details">
                        <ul>
                            <li><span class="cd-no">12,345 </span><span class="cd-name">USA</span></li>
                            <li>Deaths: 123</li>
                            <li>Recovered: 23</li>
                        </ul>
                    </div>
                </a>
                <a href="#">
                    <div class="country-details">
                        <ul>
                            <li><span class="cd-no">12,345 </span><span class="cd-name">USA</span></li>
                            <li>Deaths: 123</li>
                            <li>Recovered: 23</li>
                        </ul>
                    </div>
                </a>
                <a href="#">
                    <div class="country-details">
                        <ul>
                            <li><span class="cd-no">12,345 </span><span class="cd-name">USA</span></li>
                            <li>Deaths: 123</li>
                            <li>Recovered: 23</li>
                        </ul>
                    </div>
                </a>
                <a href="#">
                    <div class="country-details">
                        <ul>
                            <li><span class="cd-no">12,345 </span><span class="cd-name">USA</span></li>
                            <li>Deaths: 123</li>
                            <li>Recovered: 23</li>
                        </ul>
                    </div>
                </a>
                <a href="#">
                    <div class="country-details">
                        <ul>
                            <li><span class="cd-no">12,345 </span><span class="cd-name">USA</span></li>
                            <li>Deaths: 123</li>
                            <li>Recovered: 23</li>
                        </ul>
                    </div>
                </a>
                <a href="#">
                    <div class="country-details">
                        <ul>
                            <li><span class="cd-no">12,345 </span><span class="cd-name">USA</span></li>
                            <li>Deaths: 123</li>
                            <li>Recovered: 23</li>
                        </ul>
                    </div>
                </a>
                <a href="#">
                    <div class="country-details">
                        <ul>
                            <li><span class="cd-no">12,345 </span><span class="cd-name">USA</span></li>
                            <li>Deaths: 123</li>
                            <li>Recovered: 23</li>
                        </ul>
                    </div>
                </a>
                <a href="#">
                    <div class="country-details">
                        <ul>
                            <li><span class="cd-no">12,345 </span><span class="cd-name">USA</span></li>
                            <li>Deaths: 123</li>
                            <li>Recovered: 23</li>
                        </ul>
                    </div>
                </a>
                <a href="#">
                    <div class="country-details">
                        <ul>
                            <li><span class="cd-no">12,345 </span><span class="cd-name">USA</span></li>
                            <li>Deaths: 123</li>
                            <li>Recovered: 23</li>
                        </ul>
                    </div>
                </a>
                <a href="#">
                    <div class="country-details">
                        <ul>
                            <li><span class="cd-no">12,345 </span><span class="cd-name">USA</span></li>
                            <li>Deaths: 123</li>
                            <li>Recovered: 23</li>
                        </ul>
                    </div>
                </a>
                <a href="#">
                    <div class="country-details">
                        <ul>
                            <li><span class="cd-no">12,345 </span><span class="cd-name">USA</span></li>
                            <li>Deaths: 123</li>
                            <li>Recovered: 23</li>
                        </ul>
                    </div>
                </a>
                <a href="#">
                    <div class="country-details">
                        <ul>
                            <li><span class="cd-no">12,345 </span><span class="cd-name">USA</span></li>
                            <li>Deaths: 123</li>
                            <li>Recovered: 23</li>
                        </ul>
                    </div>
                </a>
            </div>
        </div>
    </md-content>
</div>
</template>

<style lang="scss" scoped>
.main-nav {
    width: 230px;
    padding: 24px 16px 112px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    transition: .3s cubic-bezier(.4,0,.2,1);
    transition-property: top;
}

.main-nav-level {
    margin-bottom: 16px;
    margin-left: 20px;
}

.country-details {

    ul {
        list-style: none;
        padding-left: 5px;
        margin: 5px 0;

        li {
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            margin: 3px 0;

            // cd - country-details
            span.cd-no {
                color: #d32f2f;
                font-size: 16px;
                font-weight: 700;
                line-height: 19px;
            }

            span.cd-name {
                color: #fff;
                font-size: 16px;
                font-weight: 400;
                line-height: 19px;
            }
        }
    }

}
</style>
