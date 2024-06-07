import Link from 'next/link';
import React from 'react';

type CardWrapperProps = {
  cssGridClassName?: string;
  children?: any;
  cardTitle?: string;
  cardLink?: string;
  isHeader?: boolean;
  isBgTransparent?: boolean;
};

const CardWrapper = ({
  cssGridClassName,
  children,
  cardTitle,
  cardLink,
  isHeader,
  isBgTransparent,
}: CardWrapperProps) => {
  return (
    <div
      className={`${cssGridClassName} rounded-3xl ${!isHeader && 'p-3'} ${
        isHeader && 'p-6 md:p-8 lg:p-[clamp(1.5rem,6%,2.5rem)]'
      } ${ isBgTransparent && 'text-darkPrimary dark:text-whitePrimary'} `}
    >
      {/* шапка карточки */}
      {isHeader && (
        <div className="flex items-center justify-between mb-5">
          {cardTitle !== undefined &&           <h3
            className={`py-2 text-xs uppercase`}
          >
            {cardTitle}
          </h3>}

          {cardLink !== undefined && (
            <Link
              className='p-2 ml-auto border rounded-full border-darkPrimary/50 dark:border-whiteSecondary/30'
              href={cardLink}
            >
              {/* <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="13"
                  cy="12.7234"
                  rx="13"
                  ry="12.7234"
                  fill="white"
                />
                <path
                  d="M19.3536 13.3536C19.5488 13.1583 19.5488 12.8417 19.3536 12.6464L16.1716 9.46447C15.9763 9.2692 15.6597 9.2692 15.4645 9.46447C15.2692 9.65973 15.2692 9.97631 15.4645 10.1716L18.2929 13L15.4645 15.8284C15.2692 16.0237 15.2692 16.3403 15.4645 16.5355C15.6597 16.7308 15.9763 16.7308 16.1716 16.5355L19.3536 13.3536ZM6 13.5L19 13.5V12.5L6 12.5V13.5Z"
                  fill="black"
                />
              </svg> */}
              <svg className='w-6 h-auto' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z" fill="currentColor"></path></svg>
            </Link>
          )}
        </div>
      )}

      {children}
    </div>
  );
};

export default CardWrapper;
