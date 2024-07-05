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
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleDeleteTask(taskId) {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  }

  function handleDeleteAllClick() {
    tasks.length = 0;
    setTasks([...tasks]);
  }

  function handleFavorite(taskId) {
    // This portion of the commented code is not fully perfect. Here
    // we are not doing the deep cloning of the tasks array. The tasks array has
    // objects inside, while using the spread operator, it will only make the shallow copy.
    // But we need to do the deep copy.

    // We are not removing this commented code as it was part of the recording.
    // But the same code is now made better and written below.
    /*
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        const newTasks = [...tasks];
        newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
        setTasks(newTasks);
        */

    // The better way of managing updates in the object within an array as a
    // state in react.
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
    console.log(searchTerm);
    if (!searchTerm) {
      setTasks(...task);
    }
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTasks([...filtered]);
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
            />
          ) : (
            <NoTasksFound />
          )}
        </div>
      </div>
    </section>
  );
}
