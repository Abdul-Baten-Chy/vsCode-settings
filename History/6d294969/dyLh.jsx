import { useState } from "react";

import AddTaskModal from "./AddTaskModal";
import NoTasksFound from "./NoTasksFound";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  //এখানে একটি ইনিশিয়াল ভেলু হিসেবে  একটি ওব্জেক্ট নেয়া হয়েছে যেটিকে স্টেটের ইনিশিয়াল ভেলু
  // হিসেবে রাখা হয়েছে, এর পরিবর্তে ইম্পটি এরে দিয়েও কাজ চালেতে পারতাম।
  const defaultTask = {
    id: crypto.randomUUID(), // এটি জাভাস্ক্রিপ্টের ডিফল্ট ফিচার। যার মাধ্যমে রেন্ডম আইডি তৈরী হয়।
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true, // এটি একটি এক্সট্রা প্রপার্টি যা ইনপুট হিসেবে ইউসার এর কাছ থেকে নেওয়া হবে না,
    //কিন্তু প্রতিটি নতুন অব্জেক্ট এ ডিফল্ট ্ফলস দিয়ে রাখতে হবে যাতে করে ফেবারিট কিনা বোঝা যায়।
  };
  const [tasks, setTasks] = useState([defaultTask]); // টাস্ক হিসেবে একটি ফাকা এরে নেওয়া হয়েছে
  //এর মধ্যে একটি ডিফল্ট অব্জেক্ট রাখা হয়েছে।
  const [showAddModal, setShowAddModal] = useState(false); // মডাল দেখানো এবং হাইড করার জন্য
  // শো মডাল নামে স্টেট নেয়া হয়েছে।
  const [taskToUpdate, setTaskToUpdate] = useState(null); // যে টাস্কটাকে এডিট করা হবে সেটিকে এই স্টেটে
  // সেট করে রাখা হয়েছে। যাতে করে যখন এডিট এর জন্য মডাল ওপেন হবে তখন এইটার ভেলু দ্বারা ফিল্ডগুলো
  // প্পিঊলেট করা যায়।
  const [filteredTask, setFiltered] = useState([]); // সার্চ রেসাল্টকে এই স্টেটে রাখা হবে

  function handleAddEditTask(newTask, isAdd) {
    // এখানে একটি এভেন্ট হেন্ডলার দ্বারা দুটি কাজ করা যাবে কারণ নতুন টাস্ক যুক্ত বা আপডেড করতে একই
    // আরগুমেন্ট নিতে হবে, নিউটাস্ক প্রপ্স একটি নতুন টাস্কও হতে পারে আবার একটি আপডেটেড টাস্কও হতে
    //পারে । এভেন্টি কি আপডেট এর জন্য কল হচ্ছে নাকি নতুন টাস্ক তৈরীর জন্য কল হচ্ছে তা বোঝার জন্য
    // ইজএড নামে একটি প্রপ্স এভেন্টি কল করার সময় পাটানো হবে, যদি এভেন্টি নতুন টাস্ক তৈরীর জন্য কল হয়
    // তবে ইজএড কে ট্রু করে পাস করা হবে আর আপডেট হলে ফলস করে পাঠানো হবে, অতঃপর এখানে ইজ এড
    // এর উপর ভিত্তি করে কন্ডিশন করা হবে

    if (isAdd) {
      setTasks([...tasks, newTask]); //নতুন হলে সেটটাস্ক এ আগের অব্জেক্টকে স্প্রেড করে সাথে ্নতুন অবজেক্ট কে
      //বসিয়ে নতুন এরে তৈরী করে স্টেট আপডেট করা হবে।
    } else {
      // ইজ এড ফলস হলে এখানে ঢুকবে এবং বর্তমান এরেতে লুপ করে নিউটাস্ক আইডির সাথে বর্তমান এরের যে টাস্কের
      // আইডি মিলবে সেটিকে ধরে অই যায়গায় প্রপ্স হিসেবে আসা নতুন আপডেটেড টাস্কটাকে বসিয়ে দিবে। আর বাকি যেগুল
      // সাথে মিলবে না সেগুলুকে লুপের সময় পাওয়া টাস্কটাকেই রিটার্ন করে দিবে।
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    // এভেন্টের মধ্যেই হেন্ডেল্কলোজ কল করে দিতে হবে, এই ফাংশন্টি শো এড মডাল কে ফলস করে দিবে যাতে মডালটি
    //বন্ধ হয়ে যায়, এবং টাস্ক টু আপডেট স্টেটকেও নাল করে দিবে যাতে ষ্টেটটি খালি হয়ে যায়। অন্যতায় আপডেট সে
    //স্টেটেও ভেলু থেকে যাবে।
    handleCloseClick();
  }

  function handleEditTask(task) {
    // এই এভেন্টি টাস্ক লিস্ট কম্পোনেন্ট হতে যে টাস্কটিকে আপডেট করতে হবে সেই টাস্কটি পেরামিটার হিসেবে পাবে
    // এবং এটিকে টাস্ক টু আপডেট স্টেটে সেট করে দিবে, আবার শোমডাল্কে ট্রু করে দিবে যাতে এডিট করার জন্য
    // মডাল্টি ওপেন হয়। অর্থাৎ যখন এডিট বাটনে ক্লিক হবে সাথে সাথে এই এভেন্টি ফায়ার হয়ে আপডেট করার জন্য
    // সংশ্লিষ্ট টাস্কটিকে স্টেটে সেট করবে এবং মদাল ট্রু করে মডাল্টিকে ওপেন করবে।
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleDeleteTask(taskId) {
    // এই ইভেন্টি যখন ইউসার ডিলিট বাটন এ ক্লিক করবে সাথে সাথে ফায়ার হয়ে যাবে। এটি পেরামিতার হিসেবে
    // যে টাস্ক এ ক্লিক করা হয়েছে সেটির আইডি পাবে। অতঃপর টাস্কস কে ফিলটার করবে , যে সমস্থ টাস্ক এর
    //আইডির সাথে পেরামিটারে প্রাপ্ত আইডির মিল তাকবে না তাদের নিয়ে আলাদা এরে তৈরী করে সেট ্টাস্কস এ
    // সেট করতে হবে, মনে রাখতে হবে রিয়েক্টে, এরেকে মিঊটেট করা যায় না এটাকে নতুন এরে দ্বারা পরিবর্তন করতে
    //হয়, কোন টাস্ক ডিলিট মানে সেই টাস্ক বাদে বাকিগুলোকে নিয়ে নতুন এরে করা যা ফিল্টার এর মাধ্যমে করা যায়।
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  }

  function handleDeleteAllClick() {
    // অল ডিলিট বাটনে ক্লিক করলে এই এভেন্টি ফায়ার হবে। সব ডিলেত মানে হল টাস্কস এর এরেটাকে এম্পটি করে দেয়া, আর
    // এটি করতে হলে টাস্কস.লেন্থ = ০ করে দিয়ে সেট টাস্কস এ নতুন ফাকা এরে তৈরী করে স্টেটকে আপডেট করে দিতে হবে
    tasks.length = 0;
    setTasks([...tasks]); // এখানে টাস্কস্কে স্প্রেড করে দেয়া হয়েছে, যেহেতু ্টাস্ককে আগেই ০ করে দেয়া হয়েছে
    //তাই স্প্রেড করার পরও খালি এরেই স্টেটে সেট হবে।
  }

  function handleFavorite(taskId) {
    // This portion of the commented code is not fully perfect. Here
    // we are not doing the deep cloning of the tasks array. The tasks array has
    // objects inside, while using the spread operator, it will only make the shallow copy.
    // But we need to do the deep copy.

    // We are not removing this commented code as it was part of the recording.
    // But the same code is now made better and written below.
    /*
    এই কোডটি ভালো কড নয় কারন এখানে ডিপ কপি করা হয়নি সেলু কপি করা হয়েছে। এরের মধ্যে কোন অব্জেক্টকে আপডেড
    //করতে চাইলে সেটিকে ডিপ কপি করে করতে হবে , আর সেটি ম্যাপ এর মাধ্যমে করা যায়। 
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        const newTasks = [...tasks];
        newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
        setTasks(newTasks);
        */

    // The better way of managing updates in the object within an array as a
    // state in react.
    // ফেভারিট বাটনে ক্লিক করলে এভেন্টি ফায়রে হবে এবং নির্দিষ্ট টাস্কের আইডিকে পেরাকমিটার হিসেবে নিবে।
    // তারপর পুরো টাস্কস এরেকে ম্যাপ করে একটা করে ব্জেক্ট পাব। অতঃপর কন্ডিশনের মাধ্যমে চেক করয়া
    // হয়েছে যে যদি টাস্ক.আইডি আর টাস্ক আইডি এক হয় তবে অই টাস্কটিকে একটা অব্জেক্ট এ স্প্রেড করে
    // অতপত যে প্রপার্টি পরিবর্তন বা এড করা প্রয়োজন সেটকে ্রিটার্ন করে দিতে হবে আর আইডি না মিললে
    // পুরানো টাস্কটাকে ই রিটার্ন করে দিতে হবে।
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFavorite: !task.isFavorite };
        } else {
          return task;
        }
      })
    );
  }

  function handleSearch(searchTerm) {
    // সার্চ করার পর সার্চ ভেলু কোন অব্জেক্ট এর টাইটেল এর মধ্যে আছে সেটি ফাইন্ড করা হচ্ছে।
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered([...filtered]);
  }

  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddEditTask}
          onCloseClick={handleCloseClick}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddClick={() => setShowAddModal(true)}
            onDeleteAllClick={handleDeleteAllClick}
          />
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onFav={handleFavorite}
              filteredTask={filteredTask}
            />
          ) : (
            <NoTasksFound />
          )}
        </div>
      </div>
    </section>
  );
}
