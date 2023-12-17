/**
 * Custom Tweet component
 * @see https://react-tweet.vercel.app/twitter-theme/advanced for details
 */

import type { Tweet as TweetType } from "react-tweet/api";
import { Suspense } from "react";
import { getTweet } from "react-tweet/api";
import { type TweetProps, TweetNotFound, TweetSkeleton } from "react-tweet";
import {
  type TwitterComponents,
  TweetContainer,
  TweetHeader,
  TweetBody,
  TweetMedia,
  TweetInfo,
  QuotedTweet,
  enrichTweet,
} from "react-tweet";

type Props = {
  tweet: TweetType;
  components?: TwitterComponents;
};

const TweetBase = ({ tweet: t, components }: Props) => {
  const tweet = enrichTweet(t);
  return (
    <TweetContainer>
      <TweetHeader tweet={tweet} components={components} />
      <TweetBody tweet={tweet} />
      {tweet.mediaDetails?.length ? (
        <TweetMedia tweet={tweet} components={components} />
      ) : null}
      {tweet.quoted_tweet && <QuotedTweet tweet={tweet.quoted_tweet} />}
      <TweetInfo tweet={tweet} />
    </TweetContainer>
  );
};

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          onError(err);
        } else {
          console.error(err);
        }
      })
    : undefined;

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound />;
  }

  return <TweetBase tweet={tweet} components={components} />;
};

export const Tweet = ({
  fallback = <TweetSkeleton />,
  ...props
}: TweetProps) => (
  <Suspense fallback={fallback}>
    <TweetContent {...props} />
  </Suspense>
);
