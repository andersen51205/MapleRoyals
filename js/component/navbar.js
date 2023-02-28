// 元件宣告
const header = Vue.createApp({});
// 元件註冊
header.component('nav-component', {
    template: `
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div class="container">
                <!-- Navbar Brand -->
                <a class="navbar-brand" href="./index.html">
                    <i class="fa-brands fa-canadian-maple-leaf"></i> MapleRoyals
                </a>
                <!-- Collapse Toggler -->
                <button type="button" class="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#Div_collapse_content">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Page Link -->
                <div id="Div_collapse_content" class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle active"
                                    href="#" role="button"
                                    data-bs-toggle="dropdown">
                                <i class="fa-solid fa-circle-question"></i> 任務資訊
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="./SafeAdventure.html">
                                    <i class="fa-solid fa-medal"></i> 乖寶寶冒險
                                </a>
                                <a class="dropdown-item" href="./HpQuest.html">
                                    <i class="fa-solid fa-briefcase-medical"></i> 加血任務
                                </a>
                                <a class="dropdown-item" href="./TheBookOfAncient.html">
                                    <i class="fa-solid fa-book"></i> 上古魔書
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `
});
// 元件掛載
header.mount('#Div_navbar');
