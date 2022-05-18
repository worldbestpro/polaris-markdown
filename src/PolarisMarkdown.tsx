import React, { Suspense } from 'react';
import { DisplayText, Link, List, SkeletonBodyText, TextContainer, TextStyle } from '@shopify/polaris';

const ReactMarkdown = React.lazy(() => import('react-markdown'));

interface Props {
  children: string;
}

const PolarisMarkdown: React.FC<Props> = ({ children = '' }) => {
  const content = children.replace(/\n/g, '  \n');
  return (
    <TextContainer>
      <Suspense fallback={<SkeletonBodyText lines={6} />}>
        <ReactMarkdown
          className={['Polaris-TextContainer', 'Markdown--container'].join(' ')}
          components={{
            h1: ({ children }) => (
              <DisplayText size="extraLarge" element="h1">
                {children}
              </DisplayText>
            ),
            h2: ({ children }) => (
              <DisplayText size="large" element="h2">
                {children}
              </DisplayText>
            ),
            h3: ({ children }) => (
              <DisplayText size="medium" element="h3">
                {children}
              </DisplayText>
            ),
            h4: ({ children }) => (
              <DisplayText size="small" element="h4">
                {children}
              </DisplayText>
            ),
            h5: ({ children }) => (
              <DisplayText size="small" element="h5">
                {children}
              </DisplayText>
            ),
            h6: ({ children }) => (
              <DisplayText size="small" element="h6">
                {children}
              </DisplayText>
            ),
            em: ({ children }) => <TextStyle variation="subdued">{children}</TextStyle>,
            strong: ({ children }) => <TextStyle variation="strong">{children}</TextStyle>,
            a: ({ children, href }) => <Link url={href}>{children}</Link>,
            ol: ({ children }) => <List type="number">{children}</List>,
            ul: ({ children }) => <List type="bullet">{children}</List>,
            li: ({ children }) => <List.Item>{children}</List.Item>,
            img: ({ src, alt }) => <img className="Markdown--img" src={src} alt={alt} />,
            hr: () => <hr className="Markdown--hr" />,
            code: ({ children }) => <TextStyle variation="code">{children}</TextStyle>,
            blockquote: ({ children }) => (
              <blockquote className="Markdown--blockquote">
                <TextContainer spacing="tight">{children}</TextContainer>
              </blockquote>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </Suspense>
    </TextContainer>
  );
};

export default PolarisMarkdown;
