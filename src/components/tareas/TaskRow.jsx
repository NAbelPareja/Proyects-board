import {
  FiCalendar,
  FiFolder,
} from "react-icons/fi";

import { TaskBadge } from "./TaskBadge";

export const TaskRow = ({ task }) => {
  return (
    <>
      {/* Desktop / Tablet */}
      <div
        className="
          hidden
          grid-cols-[minmax(220px,1fr)_90px_75px_105px_30px]
          items-center gap-2
          border-t border-slate-100
          px-3 py-2.5
          transition
          hover:bg-slate-50/70
          md:grid
        "
      >
        <div className="min-w-0">
          <p className="truncate text-[9px] font-medium text-slate-700">
            {task.title}
          </p>

          <div className="mt-0.5 flex items-center gap-1 text-[7px] text-slate-400">
            <FiFolder size={8} />
            {task.project}
          </div>
        </div>

        <TaskBadge
          type="status"
          value={task.status}
        />

        <TaskBadge
          type="priority"
          value={task.priority}
        />

        <div className="flex items-center gap-1 text-[7px] text-slate-400">
          <FiCalendar size={9} />
          {task.dueDate}
        </div>

        <div className="flex justify-end">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-300 text-[6px] font-medium text-white">
            {task.avatar}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="
          border-t border-slate-100
          p-3
          md:hidden
        "
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-medium text-slate-700">
              {task.title}
            </p>

            <div className="mt-1 flex items-center gap-1 text-[8px] text-slate-400">
              <FiFolder size={9} />
              {task.project}
            </div>
          </div>

          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-300 text-[7px] font-medium text-white">
            {task.avatar}
          </div>
        </div>

        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          <TaskBadge
            type="status"
            value={task.status}
          />

          <TaskBadge
            type="priority"
            value={task.priority}
          />

          <span className="flex items-center gap-1 text-[8px] text-slate-400">
            <FiCalendar size={9} />
            {task.dueDate}
          </span>
        </div>
      </div>
    </>
  );
};