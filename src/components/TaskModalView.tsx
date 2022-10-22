import React, { useContext } from 'react'

import CheckboxItem from './CheckboxItem';
import Dropdown from './Dropdown';
import Modal from './Modal';
import VerticalEllipsis from './svgs/VerticalEllipsis';
import ViewModalContext from '../store/view-modal';

import styles from "../styles/components/TaskModalView.module.scss"

const TaskModalView = () => {
    const { onViewClose } = useContext(ViewModalContext);

    return (
      <Modal className={styles["modal-wrapper"]} onClose={onViewClose}>
        <h1 className={styles["modal-wrapper__heading"]}>
          Research pricing points of various competitors and trial different
          business models
          <VerticalEllipsis />
        </h1>
        <p className={styles["modal-wrapper__body"]}>
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </p>
        <div>
          <h4 className={styles["modal-wrapper__subtasks"]}>
            Subtasks (2 of 3)
          </h4>
          <CheckboxItem text="Research competitor pricing and business models" />
          <CheckboxItem text="Outline a business model that works for our solution" />
          <CheckboxItem text="Talk to potential customers about our proposed solution and ask for fair price expectancy" />
        </div>
        <div>
          <h4 className={styles["modal-wrapper__status"]}>Current Status</h4>
          <Dropdown
            options={[
              { value: "todo", label: "Todo" },
              { value: "doing", label: "Doing" },
              { value: "done", label: "Done" },
            ]}
          />
        </div>
      </Modal>
    )
}

export default TaskModalView