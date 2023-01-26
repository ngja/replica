import styles from '@/components/vercel/FeatureItem.module.scss'
import {IconType} from "react-icons";
import React from "react";

type FeatureItemProps = {
  icon: IconType
}

export default function FeatureItem(props: FeatureItemProps) {
  return (
    <a>
      <div className={styles['feature-item']}>
        <div>
          <div className={styles['icon-wrapping-circle']}>
            {React.createElement(props.icon)}
          </div>
        </div>
        <div className={styles['feature-item-main']}>
          <div className={styles['feature-item-title']}>
            title
          </div>
          <div className={styles['feature-item-desc']}>
            desc
          </div>
        </div>
      </div>
    </a>
  )
}