import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="py-6">
            <div
                class="container mx-auto flex items-center justify-between gap-x-6"
            >
                <!-- Logo -->
                <a href="/">
                    <img
                        class="h-[40px]"
                        src="./assets/lws-logo-en.svg"
                        alt="Lws"
                    />
                </a>
                <!-- Logo Ends -->
                <a class="px-5 py-2 bg-[#172227] rounded-[44px]" href="#"
                    >Get Admission</a
                >
            </div>
        </nav>
        </div>
    );
}

export default Header;
