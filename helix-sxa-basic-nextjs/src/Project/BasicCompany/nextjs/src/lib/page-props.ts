import { Redirect } from 'next';
import {
  DictionaryPhrases,
  LayoutServiceData,
  ComponentPropsCollection,
  RouteData,
  LayoutServiceContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { NavigationQuery } from 'components/Navigation/Navigation.graphql';

/**
 * Sitecore page props
 */
export type SitecorePageProps = {
  locale: string;
  dictionary: DictionaryPhrases;
  componentProps: ComponentPropsCollection;
  navigation: NavigationQuery;
  notFound: boolean;
  layoutData: LayoutServiceData;
  redirect?: Redirect;
};

export type SitecoreContextValues = LayoutServiceContext & {
  route: RouteData;
  itemId: string;
};