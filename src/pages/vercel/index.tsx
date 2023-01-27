import styles from '@/pages/vercel/Vercel.module.scss'
import VercelLogo from "@/components/image/VercelLogo";
import {FiAnchor, FiAtSign, FiAward, FiChevronDown, FiCodesandbox, FiDribbble, FiHardDrive} from 'react-icons/fi'
import FeatureItem from "@/components/vercel/FeatureItem";

import React, {useState, useEffect, useRef, MouseEvent} from 'react'

export default function Vercel() {

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let handler = (event: any) => {
      if (dropdownRef.current != null && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <>
      <div className={styles['vercel-main']}>
        {/* Header */}
        <div className={styles['navbar-wrapper']}>
          <header className={styles['navbar']}>
            {/* Logo */}
            <div className={styles['navbar-logo']}>
              <VercelLogo/>
            </div>

            {/* menu */}
            <div className={styles['navbar-main']}>
              <ul>
                <li>
                  <div ref={dropdownRef}>
                    <div>
                      <button
                        className={`${styles['navbar-main-features']} ${styles['navbar-item']} ${open ? styles['active'] : styles['inactive']}`}
                        onClick={() => {
                          setOpen(prev => !prev)
                        }}
                      >
                        <span>Features</span>
                        <span><FiChevronDown className={open ? styles['active'] : styles['inactive']}/></span>
                      </button>
                    </div>
                    <div className={styles['navbar-main-features-popup']}>
                      {open ? (
                        <>
                          <div className={styles['navbar-main-features-grid']}>
                            <FeatureItem icon={FiAnchor} title="Previews"
                                         description="Zero configuration, more innovation"/>
                            <FeatureItem icon={FiAtSign} title="Next.js" description="The native Next.js platform"/>
                            <FeatureItem icon={FiAward} title="Analytics"
                                         description="Real-time insights, peak performance"/>
                            <FeatureItem icon={FiCodesandbox} title="Frontend Infrastructure"
                                         description="Always fast, Always online."/>
                            <FeatureItem icon={FiDribbble} title="Edge Functions"
                                         description="Dynamic pages, static speed"/>
                            <FeatureItem icon={FiHardDrive} title="CLI & API"
                                         description="Make the Vercel platform your own"/>
                          </div>
                          <div className={styles['navbar-main-features-tail']}>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </li>
                <li>
                  <a className={styles['navbar-item']} href='#'>Docs</a>
                </li>
                <li>
                  <a className={styles['navbar-item']} href='#'>Templates</a>
                </li>
                <li>
                  <a className={styles['navbar-item']} href='#'>Integrations</a>
                </li>
                <li>
                  <a className={styles['navbar-item']} href='#'>Customers</a>
                </li>
                <li>
                  <a className={styles['navbar-item']} href='#'>Enterprise</a>
                </li>
                <li>
                  <a className={styles['navbar-item']} href='#'>Pricing</a>
                </li>
              </ul>
            </div>

            <div className={styles['navbar-right']}>
              <ul>
                <li>
                  <a className={styles['navbar-item']} href='#'>Contact</a>
                </li>
                <li>
                  <a className={styles['navbar-item']} href='#'>Login</a>
                </li>
                <li>
                  <a className={styles['sign-up']} href='#'>Sign Up</a>
                </li>
              </ul>
            </div>
          </header>
        </div>

        {/* Body */}


        {/* Footer */}

      </div>
    </>
  )
}