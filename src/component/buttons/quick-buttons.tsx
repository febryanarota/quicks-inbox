"use client";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InboxButtonClickedIcon, InboxButtonIcon, LightningButtonIcon, TaskButtonClickedIcon, TaskButtonIcon } from "../icons";
import { QuickButtonsContext } from "@/context/quick-button-context";

export default function QuickButtons() {
  const context = useContext(QuickButtonsContext);

  if (!context) {
    throw new Error('QuickButtons must be used within a QuickButtonsProvider');
  }
  
  const { isMenuOpen, setIsMenuOpen, activeFeature, setActiveFeature } = context;

  const handleLightningButton = () => {
    // Toggle menu visibility
    if (isMenuOpen) {
      closeAllFeatures();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInboxButton = () => { 
    if (activeFeature === 'inbox') {
      closeAllFeatures();
    } else {
      setActiveFeature('inbox');
      setIsMenuOpen(true);
    }
  }

  const handleTaskButton = () => {
    if (activeFeature === 'task') {
      closeAllFeatures();
    } else {
      setActiveFeature('task');
      setIsMenuOpen(true);
    }
  }

  const handleCloseFeature = () => {
    closeAllFeatures();
  }

  const closeAllFeatures = () => {
    setActiveFeature('none');
    setIsMenuOpen(true);
  };

  return (
    <div className="flex flex-row-reverse gap-[26px] items-end">
      {/* Lightning Button */}
      { activeFeature === 'none' && (
        <motion.div>
          <button onClick={handleLightningButton}>
            <LightningButtonIcon />
          </button>
        </motion.div>
      )}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="flex flex-row gap-[26px] items-end"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Task Button */}
            {activeFeature !== 'task' && (
              <div>
                {
                  activeFeature === 'none' &&
                  <p className="text-center">Task</p>
                }
                <button onClick={handleTaskButton}>
                  <TaskButtonIcon />
                </button>
              </div>
            )}

            {/* Inbox Button */}
            {activeFeature !== 'inbox' && (
              <div>
                {
                  activeFeature === 'none' &&
                  <p className="text-center">Inbox</p>
                }
                <button onClick={handleInboxButton}>
                  <InboxButtonIcon />
                </button>
              </div>
            )}

            {/* Feature Close Button */}
            {activeFeature !== 'none' && (
              <div className="relative">
                <div className="w-[68px] h-[68px] bg-primary-darkGray rounded-full -translate-y-[0.75rem] -translate-x-4"></div>
                <button onClick={handleCloseFeature} className="absolute top-0 -translate-y-[0.75rem]">
                  {activeFeature === 'inbox' ? 
                    <InboxButtonClickedIcon className="-translate-x-1"/> : 
                    <TaskButtonClickedIcon className="-translate-x-2"/>
                  }
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
