import styles from '@/pages/vercel/Vercel.module.scss'
import VercelLogo from "@/components/image/VercelLogo";
import {FiChevronDown} from 'react-icons/fi'
import FeatureItem from "@/components/vercel/FeatureItem";

export default function Vercel() {
  return (
    <>
      <div>
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
                  <div>
                    <button className={`${styles['navbar-main-features']} ${styles['navbar-item']}`}>
                      <span>Features</span>
                      <span><FiChevronDown/></span>
                    </button>
                  </div>
                  <div className={styles['navbar-main-features-popup']}>
                    <div className={styles['navbar-main-features-grid']}>
                      <FeatureItem icon={FiChevronDown} />
                      <FeatureItem icon={FiChevronDown} />
                      <FeatureItem icon={FiChevronDown} />
                      <FeatureItem icon={FiChevronDown} />
                      <FeatureItem icon={FiChevronDown} />
                      <FeatureItem icon={FiChevronDown} />
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