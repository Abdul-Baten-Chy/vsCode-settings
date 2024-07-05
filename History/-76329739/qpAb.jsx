const StudentsRecords = () => {
  return (
    <section class="py-24 lg:pt-[120px] lg:pb-28">
            <div class="container">
                <div class="mb-16 flex flex-col items-center">
                    <h2 class="text-3xl lg:text-[40px] mb-9 font-bold">
                        <span class="text-[#00CC8C]">Students</span> of the Year
                    </h2>
                    <!-- Search Box -->
                    <form>
                        <div class="flex">
                            <div
                                class="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]"
                            >
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    class="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
                                    placeholder="Search by Student "
                                    required
                                />
                                <button
                                    type="submit"
                                    class="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
                                >
                                    <svg
                                        class="h-4 w-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                    <span class="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                    <!-- Search Box Ends -->
                </div>
                <div class="max-w-[848px] mx-auto overflow-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b border-[#FFFFFF0D]">
                                <th
                                    class="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left"
                                >
                                    ID
                                </th>
                                <th
                                    class="p-5 text-sm md:text-xl font-semibold text-left"
                                >
                                    Name
                                </th>
                                <th
                                    class="p-5 text-sm md:text-xl font-semibold"
                                >
                                    Scores
                                </th>
                                <th
                                    class="p-5 text-sm md:text-xl font-semibold"
                                >
                                    Percentage
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- class two -->
                            <tr class="bg-white/5">
                                <td class="p-5 text-sm md:text-xl" colspan="4">
                                    Class One
                                </td>
                            </tr>
                            <tr class="border-b border-[#7ECEB529]">
                                <td class="p-5 text-sm md:text-xl">1</td>
                                <td class="p-5 text-sm md:text-xl">
                                    <div class="flex space-x-3 items-center">
                                        <img
                                            class="w-8 h-8"
                                            src="./assets/avatar.png"
                                            width="32"
                                            height="32"
                                            alt="John Smith"
                                        />
                                        <span class="whitespace-nowrap"
                                            >John Smith</span
                                        >
                                    </div>
                                </td>
                                <td class="p-5 text-sm md:text-xl text-center">
                                    A+
                                </td>
                                <td class="p-5 text-sm md:text-xl text-center">
                                    98%
                                </td>
                            </tr>
                            <tr class="border-b border-[#7ECEB529]">
                                <td class="p-5 text-sm md:text-xl">2</td>
                                <td class="p-5 text-sm md:text-xl">
                                    <div class="flex space-x-3 items-center">
                                        <img
                                            class="w-8 h-8"
                                            src="./assets/avatar.png"
                                            width="32"
                                            height="32"
                                            alt="John Smith"
                                        />
                                        <span class="whitespace-nowrap"
                                            >John Smith</span
                                        >
                                    </div>
                                </td>
                                <td class="p-5 text-sm md:text-xl text-center">
                                    A+
                                </td>
                                <td class="p-5 text-sm md:text-xl text-center">
                                    98%
                                </td>
                            </tr>
                            <tr class="border-b border-[#7ECEB529]">
                                <td class="p-5 text-sm md:text-xl">3</td>
                                <td class="p-5 text-sm md:text-xl">
                                    <div class="flex space-x-3 items-center">
                                        <img
                                            class="w-8 h-8"
                                            src="./assets/avatar.png"
                                            width="32"
                                            height="32"
                                            alt="John Smith"
                                        />
                                        <span class="whitespace-nowrap"
                                            >John Smith</span
                                        >
                                    </div>
                                </td>
                                <td class="p-5 text-sm md:text-xl text-center">
                                    A+
                                </td>
                                <td class="p-5 text-sm md:text-xl text-center">
                                    98%
                                </td>
                            </tr>

                            <!-- class two -->
                            <tr class="bg-white/5">
                                <td class="p-5 text-sm md:text-xl" colspan="4">
                                    Class Two
                                </td>
                            </tr>
                            <tr class="border-b border-[#7ECEB529]">
                                <td class="p-5 text-sm md:text-xl">1</td>
                                <td class="p-5 text-sm md:text-xl">
                                    <div class="flex space-x-3 items-center">
                                        <img
                                            class="w-8 h-8"
                                            src="./assets/avatar.png"
                                            width="32"
                                            height="32"
                                            alt="John Smith"
                                        />
                                        <span class="whitespace-nowrap"
                                            >John Smith</span
                                        >
                                    </div>
                                </td>
                                <td class="p-5 text-sm md:text-xl text-center">
                                    A+
                                </td>
                                <td class="p-5 text-sm md:text-xl text-center">
                                    98%
                                </td>
                            </tr>
                            <tr class="border-b border-[#7ECEB529]">
                                <td class="p-5 text-sm md:text-xl">2</td>
                                <td class="p-5 text-sm md:text-xl">
                                    <div class="flex space-x-3 items-center">
                                        <img
                                            class="w-8 h-8"
                                            src="./assets/avatar.png"
                                            width="32"
                                            height="32"
                                            alt="John Smith"
                                        />
                                        <span class="whitespace-nowrap"
                                            >John Smith</span
                                        >
                                    </div>
                                </td>
                                <td class="p-5 text-sm md:text-xl text-center">
                                    A+
                                </td>
                                <td class="p-5 text-sm md:text-xl text-center">
                                    98%
                                </td>
                            </tr>
                            <tr class="border-b border-[#7ECEB529]">
                                <td class="p-5 text-sm md:text-xl">3</td>
                                <td class="p-5 text-sm md:text-xl">
                                    <div class="flex space-x-3 items-center">
                                        <img
                                            class="w-8 h-8"
                                            src="./assets/avatar.png"
                                            width="32"
                                            height="32"
                                            alt="John Smith"
                                        />
                                        <span class="whitespace-nowrap"
                                            >John Smith</span
                                        >
                                    </div>
                                </td>
                                <td class="p-5 text-sm md:text-xl text-center">
                                    A+
                                </td>
                                <td class="p-5 text-sm md:text-xl text-center">
                                    98%
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
  );
};

export default StudentsRecords;
