export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type ContentfulAsset = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  contentful_id?: Maybe<Scalars['String']>
  spaceId?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  file?: Maybe<ContentfulAssetFile>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  node_locale?: Maybe<Scalars['String']>
  sys?: Maybe<ContentfulAssetSys>
  fixed?: Maybe<ContentfulFixed>
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>
  fluid?: Maybe<ContentfulFluid>
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>
  resize?: Maybe<ContentfulResize>
}

export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
}

export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
}

export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
}

export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
}

export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  toFormat?: Maybe<ContentfulImageFormat>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
}

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulAssetEdge>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulAssetGroupConnection>
}

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>
  node: ContentfulAsset
  previous?: Maybe<ContentfulAsset>
}

export type ContentfulAssetFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentful_id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___revision'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>
  details?: Maybe<ContentfulAssetFileDetails>
  fileName?: Maybe<Scalars['String']>
  contentType?: Maybe<Scalars['String']>
}

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>
  image?: Maybe<ContentfulAssetFileDetailsImage>
}

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>
}

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
}

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
}

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>
  fileName?: Maybe<StringQueryOperatorInput>
  contentType?: Maybe<StringQueryOperatorInput>
}

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  file?: Maybe<ContentfulAssetFileFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulAssetSysFilterInput>
  fixed?: Maybe<ContentfulFixedFilterInput>
  resolutions?: Maybe<ContentfulResolutionsFilterInput>
  fluid?: Maybe<ContentfulFluidFilterInput>
  sizes?: Maybe<ContentfulSizesFilterInput>
  resize?: Maybe<ContentfulResizeFilterInput>
}

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulAssetEdge>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulAssetSys = {
  revision?: Maybe<Scalars['Int']>
}

export type ContentfulAssetSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>
}

export type ContentfulContentType = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  name?: Maybe<Scalars['String']>
  displayField?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulContentTypeEdge>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulContentTypeGroupConnection>
}

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>
  node: ContentfulContentType
  previous?: Maybe<ContentfulContentType>
}

export type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description'

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  displayField?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
}

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulContentTypeEdge>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
}

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
}

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
}

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
}

export type ContentfulGallery = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  title?: Maybe<Scalars['String']>
  photos?: Maybe<Array<Maybe<ContentfulPhoto>>>
  photographer?: Maybe<ContentfulPhotographer>
  spaceId?: Maybe<Scalars['String']>
  contentful_id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  sys?: Maybe<ContentfulGallerySys>
  node_locale?: Maybe<Scalars['String']>
}

export type ContentfulGalleryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulGalleryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulGalleryConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulGalleryEdge>
  nodes: Array<ContentfulGallery>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulGalleryGroupConnection>
}

export type ContentfulGalleryConnectionDistinctArgs = {
  field: ContentfulGalleryFieldsEnum
}

export type ContentfulGalleryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulGalleryFieldsEnum
}

export type ContentfulGalleryEdge = {
  next?: Maybe<ContentfulGallery>
  node: ContentfulGallery
  previous?: Maybe<ContentfulGallery>
}

export type ContentfulGalleryFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'photos'
  | 'photos___id'
  | 'photos___parent___id'
  | 'photos___parent___parent___id'
  | 'photos___parent___parent___children'
  | 'photos___parent___children'
  | 'photos___parent___children___id'
  | 'photos___parent___children___children'
  | 'photos___parent___internal___content'
  | 'photos___parent___internal___contentDigest'
  | 'photos___parent___internal___description'
  | 'photos___parent___internal___fieldOwners'
  | 'photos___parent___internal___ignoreType'
  | 'photos___parent___internal___mediaType'
  | 'photos___parent___internal___owner'
  | 'photos___parent___internal___type'
  | 'photos___children'
  | 'photos___children___id'
  | 'photos___children___parent___id'
  | 'photos___children___parent___children'
  | 'photos___children___children'
  | 'photos___children___children___id'
  | 'photos___children___children___children'
  | 'photos___children___internal___content'
  | 'photos___children___internal___contentDigest'
  | 'photos___children___internal___description'
  | 'photos___children___internal___fieldOwners'
  | 'photos___children___internal___ignoreType'
  | 'photos___children___internal___mediaType'
  | 'photos___children___internal___owner'
  | 'photos___children___internal___type'
  | 'photos___internal___content'
  | 'photos___internal___contentDigest'
  | 'photos___internal___description'
  | 'photos___internal___fieldOwners'
  | 'photos___internal___ignoreType'
  | 'photos___internal___mediaType'
  | 'photos___internal___owner'
  | 'photos___internal___type'
  | 'photos___title'
  | 'photos___photo___id'
  | 'photos___photo___parent___id'
  | 'photos___photo___parent___children'
  | 'photos___photo___children'
  | 'photos___photo___children___id'
  | 'photos___photo___children___children'
  | 'photos___photo___internal___content'
  | 'photos___photo___internal___contentDigest'
  | 'photos___photo___internal___description'
  | 'photos___photo___internal___fieldOwners'
  | 'photos___photo___internal___ignoreType'
  | 'photos___photo___internal___mediaType'
  | 'photos___photo___internal___owner'
  | 'photos___photo___internal___type'
  | 'photos___photo___contentful_id'
  | 'photos___photo___spaceId'
  | 'photos___photo___createdAt'
  | 'photos___photo___updatedAt'
  | 'photos___photo___file___url'
  | 'photos___photo___file___fileName'
  | 'photos___photo___file___contentType'
  | 'photos___photo___title'
  | 'photos___photo___description'
  | 'photos___photo___node_locale'
  | 'photos___photo___sys___revision'
  | 'photos___photo___fixed___base64'
  | 'photos___photo___fixed___tracedSVG'
  | 'photos___photo___fixed___aspectRatio'
  | 'photos___photo___fixed___width'
  | 'photos___photo___fixed___height'
  | 'photos___photo___fixed___src'
  | 'photos___photo___fixed___srcSet'
  | 'photos___photo___fixed___srcWebp'
  | 'photos___photo___fixed___srcSetWebp'
  | 'photos___photo___resolutions___base64'
  | 'photos___photo___resolutions___tracedSVG'
  | 'photos___photo___resolutions___aspectRatio'
  | 'photos___photo___resolutions___width'
  | 'photos___photo___resolutions___height'
  | 'photos___photo___resolutions___src'
  | 'photos___photo___resolutions___srcSet'
  | 'photos___photo___resolutions___srcWebp'
  | 'photos___photo___resolutions___srcSetWebp'
  | 'photos___photo___fluid___base64'
  | 'photos___photo___fluid___tracedSVG'
  | 'photos___photo___fluid___aspectRatio'
  | 'photos___photo___fluid___src'
  | 'photos___photo___fluid___srcSet'
  | 'photos___photo___fluid___srcWebp'
  | 'photos___photo___fluid___srcSetWebp'
  | 'photos___photo___fluid___sizes'
  | 'photos___photo___sizes___base64'
  | 'photos___photo___sizes___tracedSVG'
  | 'photos___photo___sizes___aspectRatio'
  | 'photos___photo___sizes___src'
  | 'photos___photo___sizes___srcSet'
  | 'photos___photo___sizes___srcWebp'
  | 'photos___photo___sizes___srcSetWebp'
  | 'photos___photo___sizes___sizes'
  | 'photos___photo___resize___base64'
  | 'photos___photo___resize___tracedSVG'
  | 'photos___photo___resize___src'
  | 'photos___photo___resize___width'
  | 'photos___photo___resize___height'
  | 'photos___photo___resize___aspectRatio'
  | 'photos___photographer___id'
  | 'photos___photographer___parent___id'
  | 'photos___photographer___parent___children'
  | 'photos___photographer___children'
  | 'photos___photographer___children___id'
  | 'photos___photographer___children___children'
  | 'photos___photographer___internal___content'
  | 'photos___photographer___internal___contentDigest'
  | 'photos___photographer___internal___description'
  | 'photos___photographer___internal___fieldOwners'
  | 'photos___photographer___internal___ignoreType'
  | 'photos___photographer___internal___mediaType'
  | 'photos___photographer___internal___owner'
  | 'photos___photographer___internal___type'
  | 'photos___photographer___name'
  | 'photos___photographer___slug'
  | 'photos___photographer___instagram'
  | 'photos___photographer___photo'
  | 'photos___photographer___photo___id'
  | 'photos___photographer___photo___children'
  | 'photos___photographer___photo___title'
  | 'photos___photographer___photo___gallery'
  | 'photos___photographer___photo___spaceId'
  | 'photos___photographer___photo___contentful_id'
  | 'photos___photographer___photo___createdAt'
  | 'photos___photographer___photo___updatedAt'
  | 'photos___photographer___photo___node_locale'
  | 'photos___photographer___photo___top'
  | 'photos___photographer___gallery'
  | 'photos___photographer___gallery___id'
  | 'photos___photographer___gallery___children'
  | 'photos___photographer___gallery___title'
  | 'photos___photographer___gallery___photos'
  | 'photos___photographer___gallery___spaceId'
  | 'photos___photographer___gallery___contentful_id'
  | 'photos___photographer___gallery___createdAt'
  | 'photos___photographer___gallery___updatedAt'
  | 'photos___photographer___gallery___node_locale'
  | 'photos___photographer___spaceId'
  | 'photos___photographer___contentful_id'
  | 'photos___photographer___createdAt'
  | 'photos___photographer___updatedAt'
  | 'photos___photographer___sys___revision'
  | 'photos___photographer___node_locale'
  | 'photos___gallery'
  | 'photos___gallery___id'
  | 'photos___gallery___parent___id'
  | 'photos___gallery___parent___children'
  | 'photos___gallery___children'
  | 'photos___gallery___children___id'
  | 'photos___gallery___children___children'
  | 'photos___gallery___internal___content'
  | 'photos___gallery___internal___contentDigest'
  | 'photos___gallery___internal___description'
  | 'photos___gallery___internal___fieldOwners'
  | 'photos___gallery___internal___ignoreType'
  | 'photos___gallery___internal___mediaType'
  | 'photos___gallery___internal___owner'
  | 'photos___gallery___internal___type'
  | 'photos___gallery___title'
  | 'photos___gallery___photos'
  | 'photos___gallery___photos___id'
  | 'photos___gallery___photos___children'
  | 'photos___gallery___photos___title'
  | 'photos___gallery___photos___gallery'
  | 'photos___gallery___photos___spaceId'
  | 'photos___gallery___photos___contentful_id'
  | 'photos___gallery___photos___createdAt'
  | 'photos___gallery___photos___updatedAt'
  | 'photos___gallery___photos___node_locale'
  | 'photos___gallery___photos___top'
  | 'photos___gallery___photographer___id'
  | 'photos___gallery___photographer___children'
  | 'photos___gallery___photographer___name'
  | 'photos___gallery___photographer___slug'
  | 'photos___gallery___photographer___instagram'
  | 'photos___gallery___photographer___photo'
  | 'photos___gallery___photographer___gallery'
  | 'photos___gallery___photographer___spaceId'
  | 'photos___gallery___photographer___contentful_id'
  | 'photos___gallery___photographer___createdAt'
  | 'photos___gallery___photographer___updatedAt'
  | 'photos___gallery___photographer___node_locale'
  | 'photos___gallery___spaceId'
  | 'photos___gallery___contentful_id'
  | 'photos___gallery___createdAt'
  | 'photos___gallery___updatedAt'
  | 'photos___gallery___sys___revision'
  | 'photos___gallery___node_locale'
  | 'photos___spaceId'
  | 'photos___contentful_id'
  | 'photos___createdAt'
  | 'photos___updatedAt'
  | 'photos___sys___revision'
  | 'photos___node_locale'
  | 'photos___top'
  | 'photos___top___id'
  | 'photos___top___parent___id'
  | 'photos___top___parent___children'
  | 'photos___top___children'
  | 'photos___top___children___id'
  | 'photos___top___children___children'
  | 'photos___top___internal___content'
  | 'photos___top___internal___contentDigest'
  | 'photos___top___internal___description'
  | 'photos___top___internal___fieldOwners'
  | 'photos___top___internal___ignoreType'
  | 'photos___top___internal___mediaType'
  | 'photos___top___internal___owner'
  | 'photos___top___internal___type'
  | 'photos___top___title'
  | 'photos___top___photos'
  | 'photos___top___photos___id'
  | 'photos___top___photos___children'
  | 'photos___top___photos___title'
  | 'photos___top___photos___gallery'
  | 'photos___top___photos___spaceId'
  | 'photos___top___photos___contentful_id'
  | 'photos___top___photos___createdAt'
  | 'photos___top___photos___updatedAt'
  | 'photos___top___photos___node_locale'
  | 'photos___top___photos___top'
  | 'photos___top___spaceId'
  | 'photos___top___contentful_id'
  | 'photos___top___createdAt'
  | 'photos___top___updatedAt'
  | 'photos___top___sys___revision'
  | 'photos___top___node_locale'
  | 'photographer___id'
  | 'photographer___parent___id'
  | 'photographer___parent___parent___id'
  | 'photographer___parent___parent___children'
  | 'photographer___parent___children'
  | 'photographer___parent___children___id'
  | 'photographer___parent___children___children'
  | 'photographer___parent___internal___content'
  | 'photographer___parent___internal___contentDigest'
  | 'photographer___parent___internal___description'
  | 'photographer___parent___internal___fieldOwners'
  | 'photographer___parent___internal___ignoreType'
  | 'photographer___parent___internal___mediaType'
  | 'photographer___parent___internal___owner'
  | 'photographer___parent___internal___type'
  | 'photographer___children'
  | 'photographer___children___id'
  | 'photographer___children___parent___id'
  | 'photographer___children___parent___children'
  | 'photographer___children___children'
  | 'photographer___children___children___id'
  | 'photographer___children___children___children'
  | 'photographer___children___internal___content'
  | 'photographer___children___internal___contentDigest'
  | 'photographer___children___internal___description'
  | 'photographer___children___internal___fieldOwners'
  | 'photographer___children___internal___ignoreType'
  | 'photographer___children___internal___mediaType'
  | 'photographer___children___internal___owner'
  | 'photographer___children___internal___type'
  | 'photographer___internal___content'
  | 'photographer___internal___contentDigest'
  | 'photographer___internal___description'
  | 'photographer___internal___fieldOwners'
  | 'photographer___internal___ignoreType'
  | 'photographer___internal___mediaType'
  | 'photographer___internal___owner'
  | 'photographer___internal___type'
  | 'photographer___name'
  | 'photographer___slug'
  | 'photographer___instagram'
  | 'photographer___photo'
  | 'photographer___photo___id'
  | 'photographer___photo___parent___id'
  | 'photographer___photo___parent___children'
  | 'photographer___photo___children'
  | 'photographer___photo___children___id'
  | 'photographer___photo___children___children'
  | 'photographer___photo___internal___content'
  | 'photographer___photo___internal___contentDigest'
  | 'photographer___photo___internal___description'
  | 'photographer___photo___internal___fieldOwners'
  | 'photographer___photo___internal___ignoreType'
  | 'photographer___photo___internal___mediaType'
  | 'photographer___photo___internal___owner'
  | 'photographer___photo___internal___type'
  | 'photographer___photo___title'
  | 'photographer___photo___photo___id'
  | 'photographer___photo___photo___children'
  | 'photographer___photo___photo___contentful_id'
  | 'photographer___photo___photo___spaceId'
  | 'photographer___photo___photo___createdAt'
  | 'photographer___photo___photo___updatedAt'
  | 'photographer___photo___photo___title'
  | 'photographer___photo___photo___description'
  | 'photographer___photo___photo___node_locale'
  | 'photographer___photo___photographer___id'
  | 'photographer___photo___photographer___children'
  | 'photographer___photo___photographer___name'
  | 'photographer___photo___photographer___slug'
  | 'photographer___photo___photographer___instagram'
  | 'photographer___photo___photographer___photo'
  | 'photographer___photo___photographer___gallery'
  | 'photographer___photo___photographer___spaceId'
  | 'photographer___photo___photographer___contentful_id'
  | 'photographer___photo___photographer___createdAt'
  | 'photographer___photo___photographer___updatedAt'
  | 'photographer___photo___photographer___node_locale'
  | 'photographer___photo___gallery'
  | 'photographer___photo___gallery___id'
  | 'photographer___photo___gallery___children'
  | 'photographer___photo___gallery___title'
  | 'photographer___photo___gallery___photos'
  | 'photographer___photo___gallery___spaceId'
  | 'photographer___photo___gallery___contentful_id'
  | 'photographer___photo___gallery___createdAt'
  | 'photographer___photo___gallery___updatedAt'
  | 'photographer___photo___gallery___node_locale'
  | 'photographer___photo___spaceId'
  | 'photographer___photo___contentful_id'
  | 'photographer___photo___createdAt'
  | 'photographer___photo___updatedAt'
  | 'photographer___photo___sys___revision'
  | 'photographer___photo___node_locale'
  | 'photographer___photo___top'
  | 'photographer___photo___top___id'
  | 'photographer___photo___top___children'
  | 'photographer___photo___top___title'
  | 'photographer___photo___top___photos'
  | 'photographer___photo___top___spaceId'
  | 'photographer___photo___top___contentful_id'
  | 'photographer___photo___top___createdAt'
  | 'photographer___photo___top___updatedAt'
  | 'photographer___photo___top___node_locale'
  | 'photographer___gallery'
  | 'photographer___gallery___id'
  | 'photographer___gallery___parent___id'
  | 'photographer___gallery___parent___children'
  | 'photographer___gallery___children'
  | 'photographer___gallery___children___id'
  | 'photographer___gallery___children___children'
  | 'photographer___gallery___internal___content'
  | 'photographer___gallery___internal___contentDigest'
  | 'photographer___gallery___internal___description'
  | 'photographer___gallery___internal___fieldOwners'
  | 'photographer___gallery___internal___ignoreType'
  | 'photographer___gallery___internal___mediaType'
  | 'photographer___gallery___internal___owner'
  | 'photographer___gallery___internal___type'
  | 'photographer___gallery___title'
  | 'photographer___gallery___photos'
  | 'photographer___gallery___photos___id'
  | 'photographer___gallery___photos___children'
  | 'photographer___gallery___photos___title'
  | 'photographer___gallery___photos___gallery'
  | 'photographer___gallery___photos___spaceId'
  | 'photographer___gallery___photos___contentful_id'
  | 'photographer___gallery___photos___createdAt'
  | 'photographer___gallery___photos___updatedAt'
  | 'photographer___gallery___photos___node_locale'
  | 'photographer___gallery___photos___top'
  | 'photographer___gallery___photographer___id'
  | 'photographer___gallery___photographer___children'
  | 'photographer___gallery___photographer___name'
  | 'photographer___gallery___photographer___slug'
  | 'photographer___gallery___photographer___instagram'
  | 'photographer___gallery___photographer___photo'
  | 'photographer___gallery___photographer___gallery'
  | 'photographer___gallery___photographer___spaceId'
  | 'photographer___gallery___photographer___contentful_id'
  | 'photographer___gallery___photographer___createdAt'
  | 'photographer___gallery___photographer___updatedAt'
  | 'photographer___gallery___photographer___node_locale'
  | 'photographer___gallery___spaceId'
  | 'photographer___gallery___contentful_id'
  | 'photographer___gallery___createdAt'
  | 'photographer___gallery___updatedAt'
  | 'photographer___gallery___sys___revision'
  | 'photographer___gallery___node_locale'
  | 'photographer___spaceId'
  | 'photographer___contentful_id'
  | 'photographer___createdAt'
  | 'photographer___updatedAt'
  | 'photographer___sys___revision'
  | 'photographer___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'

export type ContentfulGalleryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  photos?: Maybe<ContentfulPhotoFilterListInput>
  photographer?: Maybe<ContentfulPhotographerFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulGallerySysFilterInput>
  node_locale?: Maybe<StringQueryOperatorInput>
}

export type ContentfulGalleryFilterListInput = {
  elemMatch?: Maybe<ContentfulGalleryFilterInput>
}

export type ContentfulGalleryGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulGalleryEdge>
  nodes: Array<ContentfulGallery>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulGallerySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulGalleryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulGallerySys = {
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulGallerySysContentType>
}

export type ContentfulGallerySysContentType = {
  sys?: Maybe<ContentfulGallerySysContentTypeSys>
}

export type ContentfulGallerySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulGallerySysContentTypeSysFilterInput>
}

export type ContentfulGallerySysContentTypeSys = {
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  contentful_id?: Maybe<Scalars['String']>
}

export type ContentfulGallerySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulGallerySysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulGallerySysContentTypeFilterInput>
}

export type ContentfulImageCropFocus =
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER'

export type ContentfulImageFormat = 'NO_CHANGE' | 'JPG' | 'PNG' | 'WEBP'

export type ContentfulPhoto = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  title?: Maybe<Scalars['String']>
  photo?: Maybe<ContentfulAsset>
  photographer?: Maybe<ContentfulPhotographer>
  gallery?: Maybe<Array<Maybe<ContentfulGallery>>>
  spaceId?: Maybe<Scalars['String']>
  contentful_id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  sys?: Maybe<ContentfulPhotoSys>
  node_locale?: Maybe<Scalars['String']>
  top?: Maybe<Array<Maybe<ContentfulTop>>>
}

export type ContentfulPhotoCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulPhotoUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulPhotoConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPhotoEdge>
  nodes: Array<ContentfulPhoto>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulPhotoGroupConnection>
}

export type ContentfulPhotoConnectionDistinctArgs = {
  field: ContentfulPhotoFieldsEnum
}

export type ContentfulPhotoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulPhotoFieldsEnum
}

export type ContentfulPhotoEdge = {
  next?: Maybe<ContentfulPhoto>
  node: ContentfulPhoto
  previous?: Maybe<ContentfulPhoto>
}

export type ContentfulPhotoFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'photo___id'
  | 'photo___parent___id'
  | 'photo___parent___parent___id'
  | 'photo___parent___parent___children'
  | 'photo___parent___children'
  | 'photo___parent___children___id'
  | 'photo___parent___children___children'
  | 'photo___parent___internal___content'
  | 'photo___parent___internal___contentDigest'
  | 'photo___parent___internal___description'
  | 'photo___parent___internal___fieldOwners'
  | 'photo___parent___internal___ignoreType'
  | 'photo___parent___internal___mediaType'
  | 'photo___parent___internal___owner'
  | 'photo___parent___internal___type'
  | 'photo___children'
  | 'photo___children___id'
  | 'photo___children___parent___id'
  | 'photo___children___parent___children'
  | 'photo___children___children'
  | 'photo___children___children___id'
  | 'photo___children___children___children'
  | 'photo___children___internal___content'
  | 'photo___children___internal___contentDigest'
  | 'photo___children___internal___description'
  | 'photo___children___internal___fieldOwners'
  | 'photo___children___internal___ignoreType'
  | 'photo___children___internal___mediaType'
  | 'photo___children___internal___owner'
  | 'photo___children___internal___type'
  | 'photo___internal___content'
  | 'photo___internal___contentDigest'
  | 'photo___internal___description'
  | 'photo___internal___fieldOwners'
  | 'photo___internal___ignoreType'
  | 'photo___internal___mediaType'
  | 'photo___internal___owner'
  | 'photo___internal___type'
  | 'photo___contentful_id'
  | 'photo___spaceId'
  | 'photo___createdAt'
  | 'photo___updatedAt'
  | 'photo___file___url'
  | 'photo___file___details___size'
  | 'photo___file___fileName'
  | 'photo___file___contentType'
  | 'photo___title'
  | 'photo___description'
  | 'photo___node_locale'
  | 'photo___sys___revision'
  | 'photo___fixed___base64'
  | 'photo___fixed___tracedSVG'
  | 'photo___fixed___aspectRatio'
  | 'photo___fixed___width'
  | 'photo___fixed___height'
  | 'photo___fixed___src'
  | 'photo___fixed___srcSet'
  | 'photo___fixed___srcWebp'
  | 'photo___fixed___srcSetWebp'
  | 'photo___resolutions___base64'
  | 'photo___resolutions___tracedSVG'
  | 'photo___resolutions___aspectRatio'
  | 'photo___resolutions___width'
  | 'photo___resolutions___height'
  | 'photo___resolutions___src'
  | 'photo___resolutions___srcSet'
  | 'photo___resolutions___srcWebp'
  | 'photo___resolutions___srcSetWebp'
  | 'photo___fluid___base64'
  | 'photo___fluid___tracedSVG'
  | 'photo___fluid___aspectRatio'
  | 'photo___fluid___src'
  | 'photo___fluid___srcSet'
  | 'photo___fluid___srcWebp'
  | 'photo___fluid___srcSetWebp'
  | 'photo___fluid___sizes'
  | 'photo___sizes___base64'
  | 'photo___sizes___tracedSVG'
  | 'photo___sizes___aspectRatio'
  | 'photo___sizes___src'
  | 'photo___sizes___srcSet'
  | 'photo___sizes___srcWebp'
  | 'photo___sizes___srcSetWebp'
  | 'photo___sizes___sizes'
  | 'photo___resize___base64'
  | 'photo___resize___tracedSVG'
  | 'photo___resize___src'
  | 'photo___resize___width'
  | 'photo___resize___height'
  | 'photo___resize___aspectRatio'
  | 'photographer___id'
  | 'photographer___parent___id'
  | 'photographer___parent___parent___id'
  | 'photographer___parent___parent___children'
  | 'photographer___parent___children'
  | 'photographer___parent___children___id'
  | 'photographer___parent___children___children'
  | 'photographer___parent___internal___content'
  | 'photographer___parent___internal___contentDigest'
  | 'photographer___parent___internal___description'
  | 'photographer___parent___internal___fieldOwners'
  | 'photographer___parent___internal___ignoreType'
  | 'photographer___parent___internal___mediaType'
  | 'photographer___parent___internal___owner'
  | 'photographer___parent___internal___type'
  | 'photographer___children'
  | 'photographer___children___id'
  | 'photographer___children___parent___id'
  | 'photographer___children___parent___children'
  | 'photographer___children___children'
  | 'photographer___children___children___id'
  | 'photographer___children___children___children'
  | 'photographer___children___internal___content'
  | 'photographer___children___internal___contentDigest'
  | 'photographer___children___internal___description'
  | 'photographer___children___internal___fieldOwners'
  | 'photographer___children___internal___ignoreType'
  | 'photographer___children___internal___mediaType'
  | 'photographer___children___internal___owner'
  | 'photographer___children___internal___type'
  | 'photographer___internal___content'
  | 'photographer___internal___contentDigest'
  | 'photographer___internal___description'
  | 'photographer___internal___fieldOwners'
  | 'photographer___internal___ignoreType'
  | 'photographer___internal___mediaType'
  | 'photographer___internal___owner'
  | 'photographer___internal___type'
  | 'photographer___name'
  | 'photographer___slug'
  | 'photographer___instagram'
  | 'photographer___photo'
  | 'photographer___photo___id'
  | 'photographer___photo___parent___id'
  | 'photographer___photo___parent___children'
  | 'photographer___photo___children'
  | 'photographer___photo___children___id'
  | 'photographer___photo___children___children'
  | 'photographer___photo___internal___content'
  | 'photographer___photo___internal___contentDigest'
  | 'photographer___photo___internal___description'
  | 'photographer___photo___internal___fieldOwners'
  | 'photographer___photo___internal___ignoreType'
  | 'photographer___photo___internal___mediaType'
  | 'photographer___photo___internal___owner'
  | 'photographer___photo___internal___type'
  | 'photographer___photo___title'
  | 'photographer___photo___photo___id'
  | 'photographer___photo___photo___children'
  | 'photographer___photo___photo___contentful_id'
  | 'photographer___photo___photo___spaceId'
  | 'photographer___photo___photo___createdAt'
  | 'photographer___photo___photo___updatedAt'
  | 'photographer___photo___photo___title'
  | 'photographer___photo___photo___description'
  | 'photographer___photo___photo___node_locale'
  | 'photographer___photo___photographer___id'
  | 'photographer___photo___photographer___children'
  | 'photographer___photo___photographer___name'
  | 'photographer___photo___photographer___slug'
  | 'photographer___photo___photographer___instagram'
  | 'photographer___photo___photographer___photo'
  | 'photographer___photo___photographer___gallery'
  | 'photographer___photo___photographer___spaceId'
  | 'photographer___photo___photographer___contentful_id'
  | 'photographer___photo___photographer___createdAt'
  | 'photographer___photo___photographer___updatedAt'
  | 'photographer___photo___photographer___node_locale'
  | 'photographer___photo___gallery'
  | 'photographer___photo___gallery___id'
  | 'photographer___photo___gallery___children'
  | 'photographer___photo___gallery___title'
  | 'photographer___photo___gallery___photos'
  | 'photographer___photo___gallery___spaceId'
  | 'photographer___photo___gallery___contentful_id'
  | 'photographer___photo___gallery___createdAt'
  | 'photographer___photo___gallery___updatedAt'
  | 'photographer___photo___gallery___node_locale'
  | 'photographer___photo___spaceId'
  | 'photographer___photo___contentful_id'
  | 'photographer___photo___createdAt'
  | 'photographer___photo___updatedAt'
  | 'photographer___photo___sys___revision'
  | 'photographer___photo___node_locale'
  | 'photographer___photo___top'
  | 'photographer___photo___top___id'
  | 'photographer___photo___top___children'
  | 'photographer___photo___top___title'
  | 'photographer___photo___top___photos'
  | 'photographer___photo___top___spaceId'
  | 'photographer___photo___top___contentful_id'
  | 'photographer___photo___top___createdAt'
  | 'photographer___photo___top___updatedAt'
  | 'photographer___photo___top___node_locale'
  | 'photographer___gallery'
  | 'photographer___gallery___id'
  | 'photographer___gallery___parent___id'
  | 'photographer___gallery___parent___children'
  | 'photographer___gallery___children'
  | 'photographer___gallery___children___id'
  | 'photographer___gallery___children___children'
  | 'photographer___gallery___internal___content'
  | 'photographer___gallery___internal___contentDigest'
  | 'photographer___gallery___internal___description'
  | 'photographer___gallery___internal___fieldOwners'
  | 'photographer___gallery___internal___ignoreType'
  | 'photographer___gallery___internal___mediaType'
  | 'photographer___gallery___internal___owner'
  | 'photographer___gallery___internal___type'
  | 'photographer___gallery___title'
  | 'photographer___gallery___photos'
  | 'photographer___gallery___photos___id'
  | 'photographer___gallery___photos___children'
  | 'photographer___gallery___photos___title'
  | 'photographer___gallery___photos___gallery'
  | 'photographer___gallery___photos___spaceId'
  | 'photographer___gallery___photos___contentful_id'
  | 'photographer___gallery___photos___createdAt'
  | 'photographer___gallery___photos___updatedAt'
  | 'photographer___gallery___photos___node_locale'
  | 'photographer___gallery___photos___top'
  | 'photographer___gallery___photographer___id'
  | 'photographer___gallery___photographer___children'
  | 'photographer___gallery___photographer___name'
  | 'photographer___gallery___photographer___slug'
  | 'photographer___gallery___photographer___instagram'
  | 'photographer___gallery___photographer___photo'
  | 'photographer___gallery___photographer___gallery'
  | 'photographer___gallery___photographer___spaceId'
  | 'photographer___gallery___photographer___contentful_id'
  | 'photographer___gallery___photographer___createdAt'
  | 'photographer___gallery___photographer___updatedAt'
  | 'photographer___gallery___photographer___node_locale'
  | 'photographer___gallery___spaceId'
  | 'photographer___gallery___contentful_id'
  | 'photographer___gallery___createdAt'
  | 'photographer___gallery___updatedAt'
  | 'photographer___gallery___sys___revision'
  | 'photographer___gallery___node_locale'
  | 'photographer___spaceId'
  | 'photographer___contentful_id'
  | 'photographer___createdAt'
  | 'photographer___updatedAt'
  | 'photographer___sys___revision'
  | 'photographer___node_locale'
  | 'gallery'
  | 'gallery___id'
  | 'gallery___parent___id'
  | 'gallery___parent___parent___id'
  | 'gallery___parent___parent___children'
  | 'gallery___parent___children'
  | 'gallery___parent___children___id'
  | 'gallery___parent___children___children'
  | 'gallery___parent___internal___content'
  | 'gallery___parent___internal___contentDigest'
  | 'gallery___parent___internal___description'
  | 'gallery___parent___internal___fieldOwners'
  | 'gallery___parent___internal___ignoreType'
  | 'gallery___parent___internal___mediaType'
  | 'gallery___parent___internal___owner'
  | 'gallery___parent___internal___type'
  | 'gallery___children'
  | 'gallery___children___id'
  | 'gallery___children___parent___id'
  | 'gallery___children___parent___children'
  | 'gallery___children___children'
  | 'gallery___children___children___id'
  | 'gallery___children___children___children'
  | 'gallery___children___internal___content'
  | 'gallery___children___internal___contentDigest'
  | 'gallery___children___internal___description'
  | 'gallery___children___internal___fieldOwners'
  | 'gallery___children___internal___ignoreType'
  | 'gallery___children___internal___mediaType'
  | 'gallery___children___internal___owner'
  | 'gallery___children___internal___type'
  | 'gallery___internal___content'
  | 'gallery___internal___contentDigest'
  | 'gallery___internal___description'
  | 'gallery___internal___fieldOwners'
  | 'gallery___internal___ignoreType'
  | 'gallery___internal___mediaType'
  | 'gallery___internal___owner'
  | 'gallery___internal___type'
  | 'gallery___title'
  | 'gallery___photos'
  | 'gallery___photos___id'
  | 'gallery___photos___parent___id'
  | 'gallery___photos___parent___children'
  | 'gallery___photos___children'
  | 'gallery___photos___children___id'
  | 'gallery___photos___children___children'
  | 'gallery___photos___internal___content'
  | 'gallery___photos___internal___contentDigest'
  | 'gallery___photos___internal___description'
  | 'gallery___photos___internal___fieldOwners'
  | 'gallery___photos___internal___ignoreType'
  | 'gallery___photos___internal___mediaType'
  | 'gallery___photos___internal___owner'
  | 'gallery___photos___internal___type'
  | 'gallery___photos___title'
  | 'gallery___photos___photo___id'
  | 'gallery___photos___photo___children'
  | 'gallery___photos___photo___contentful_id'
  | 'gallery___photos___photo___spaceId'
  | 'gallery___photos___photo___createdAt'
  | 'gallery___photos___photo___updatedAt'
  | 'gallery___photos___photo___title'
  | 'gallery___photos___photo___description'
  | 'gallery___photos___photo___node_locale'
  | 'gallery___photos___photographer___id'
  | 'gallery___photos___photographer___children'
  | 'gallery___photos___photographer___name'
  | 'gallery___photos___photographer___slug'
  | 'gallery___photos___photographer___instagram'
  | 'gallery___photos___photographer___photo'
  | 'gallery___photos___photographer___gallery'
  | 'gallery___photos___photographer___spaceId'
  | 'gallery___photos___photographer___contentful_id'
  | 'gallery___photos___photographer___createdAt'
  | 'gallery___photos___photographer___updatedAt'
  | 'gallery___photos___photographer___node_locale'
  | 'gallery___photos___gallery'
  | 'gallery___photos___gallery___id'
  | 'gallery___photos___gallery___children'
  | 'gallery___photos___gallery___title'
  | 'gallery___photos___gallery___photos'
  | 'gallery___photos___gallery___spaceId'
  | 'gallery___photos___gallery___contentful_id'
  | 'gallery___photos___gallery___createdAt'
  | 'gallery___photos___gallery___updatedAt'
  | 'gallery___photos___gallery___node_locale'
  | 'gallery___photos___spaceId'
  | 'gallery___photos___contentful_id'
  | 'gallery___photos___createdAt'
  | 'gallery___photos___updatedAt'
  | 'gallery___photos___sys___revision'
  | 'gallery___photos___node_locale'
  | 'gallery___photos___top'
  | 'gallery___photos___top___id'
  | 'gallery___photos___top___children'
  | 'gallery___photos___top___title'
  | 'gallery___photos___top___photos'
  | 'gallery___photos___top___spaceId'
  | 'gallery___photos___top___contentful_id'
  | 'gallery___photos___top___createdAt'
  | 'gallery___photos___top___updatedAt'
  | 'gallery___photos___top___node_locale'
  | 'gallery___photographer___id'
  | 'gallery___photographer___parent___id'
  | 'gallery___photographer___parent___children'
  | 'gallery___photographer___children'
  | 'gallery___photographer___children___id'
  | 'gallery___photographer___children___children'
  | 'gallery___photographer___internal___content'
  | 'gallery___photographer___internal___contentDigest'
  | 'gallery___photographer___internal___description'
  | 'gallery___photographer___internal___fieldOwners'
  | 'gallery___photographer___internal___ignoreType'
  | 'gallery___photographer___internal___mediaType'
  | 'gallery___photographer___internal___owner'
  | 'gallery___photographer___internal___type'
  | 'gallery___photographer___name'
  | 'gallery___photographer___slug'
  | 'gallery___photographer___instagram'
  | 'gallery___photographer___photo'
  | 'gallery___photographer___photo___id'
  | 'gallery___photographer___photo___children'
  | 'gallery___photographer___photo___title'
  | 'gallery___photographer___photo___gallery'
  | 'gallery___photographer___photo___spaceId'
  | 'gallery___photographer___photo___contentful_id'
  | 'gallery___photographer___photo___createdAt'
  | 'gallery___photographer___photo___updatedAt'
  | 'gallery___photographer___photo___node_locale'
  | 'gallery___photographer___photo___top'
  | 'gallery___photographer___gallery'
  | 'gallery___photographer___gallery___id'
  | 'gallery___photographer___gallery___children'
  | 'gallery___photographer___gallery___title'
  | 'gallery___photographer___gallery___photos'
  | 'gallery___photographer___gallery___spaceId'
  | 'gallery___photographer___gallery___contentful_id'
  | 'gallery___photographer___gallery___createdAt'
  | 'gallery___photographer___gallery___updatedAt'
  | 'gallery___photographer___gallery___node_locale'
  | 'gallery___photographer___spaceId'
  | 'gallery___photographer___contentful_id'
  | 'gallery___photographer___createdAt'
  | 'gallery___photographer___updatedAt'
  | 'gallery___photographer___sys___revision'
  | 'gallery___photographer___node_locale'
  | 'gallery___spaceId'
  | 'gallery___contentful_id'
  | 'gallery___createdAt'
  | 'gallery___updatedAt'
  | 'gallery___sys___revision'
  | 'gallery___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'top'
  | 'top___id'
  | 'top___parent___id'
  | 'top___parent___parent___id'
  | 'top___parent___parent___children'
  | 'top___parent___children'
  | 'top___parent___children___id'
  | 'top___parent___children___children'
  | 'top___parent___internal___content'
  | 'top___parent___internal___contentDigest'
  | 'top___parent___internal___description'
  | 'top___parent___internal___fieldOwners'
  | 'top___parent___internal___ignoreType'
  | 'top___parent___internal___mediaType'
  | 'top___parent___internal___owner'
  | 'top___parent___internal___type'
  | 'top___children'
  | 'top___children___id'
  | 'top___children___parent___id'
  | 'top___children___parent___children'
  | 'top___children___children'
  | 'top___children___children___id'
  | 'top___children___children___children'
  | 'top___children___internal___content'
  | 'top___children___internal___contentDigest'
  | 'top___children___internal___description'
  | 'top___children___internal___fieldOwners'
  | 'top___children___internal___ignoreType'
  | 'top___children___internal___mediaType'
  | 'top___children___internal___owner'
  | 'top___children___internal___type'
  | 'top___internal___content'
  | 'top___internal___contentDigest'
  | 'top___internal___description'
  | 'top___internal___fieldOwners'
  | 'top___internal___ignoreType'
  | 'top___internal___mediaType'
  | 'top___internal___owner'
  | 'top___internal___type'
  | 'top___title'
  | 'top___photos'
  | 'top___photos___id'
  | 'top___photos___parent___id'
  | 'top___photos___parent___children'
  | 'top___photos___children'
  | 'top___photos___children___id'
  | 'top___photos___children___children'
  | 'top___photos___internal___content'
  | 'top___photos___internal___contentDigest'
  | 'top___photos___internal___description'
  | 'top___photos___internal___fieldOwners'
  | 'top___photos___internal___ignoreType'
  | 'top___photos___internal___mediaType'
  | 'top___photos___internal___owner'
  | 'top___photos___internal___type'
  | 'top___photos___title'
  | 'top___photos___photo___id'
  | 'top___photos___photo___children'
  | 'top___photos___photo___contentful_id'
  | 'top___photos___photo___spaceId'
  | 'top___photos___photo___createdAt'
  | 'top___photos___photo___updatedAt'
  | 'top___photos___photo___title'
  | 'top___photos___photo___description'
  | 'top___photos___photo___node_locale'
  | 'top___photos___photographer___id'
  | 'top___photos___photographer___children'
  | 'top___photos___photographer___name'
  | 'top___photos___photographer___slug'
  | 'top___photos___photographer___instagram'
  | 'top___photos___photographer___photo'
  | 'top___photos___photographer___gallery'
  | 'top___photos___photographer___spaceId'
  | 'top___photos___photographer___contentful_id'
  | 'top___photos___photographer___createdAt'
  | 'top___photos___photographer___updatedAt'
  | 'top___photos___photographer___node_locale'
  | 'top___photos___gallery'
  | 'top___photos___gallery___id'
  | 'top___photos___gallery___children'
  | 'top___photos___gallery___title'
  | 'top___photos___gallery___photos'
  | 'top___photos___gallery___spaceId'
  | 'top___photos___gallery___contentful_id'
  | 'top___photos___gallery___createdAt'
  | 'top___photos___gallery___updatedAt'
  | 'top___photos___gallery___node_locale'
  | 'top___photos___spaceId'
  | 'top___photos___contentful_id'
  | 'top___photos___createdAt'
  | 'top___photos___updatedAt'
  | 'top___photos___sys___revision'
  | 'top___photos___node_locale'
  | 'top___photos___top'
  | 'top___photos___top___id'
  | 'top___photos___top___children'
  | 'top___photos___top___title'
  | 'top___photos___top___photos'
  | 'top___photos___top___spaceId'
  | 'top___photos___top___contentful_id'
  | 'top___photos___top___createdAt'
  | 'top___photos___top___updatedAt'
  | 'top___photos___top___node_locale'
  | 'top___spaceId'
  | 'top___contentful_id'
  | 'top___createdAt'
  | 'top___updatedAt'
  | 'top___sys___revision'
  | 'top___node_locale'

export type ContentfulPhotoFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  photo?: Maybe<ContentfulAssetFilterInput>
  photographer?: Maybe<ContentfulPhotographerFilterInput>
  gallery?: Maybe<ContentfulGalleryFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulPhotoSysFilterInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  top?: Maybe<ContentfulTopFilterListInput>
}

export type ContentfulPhotoFilterListInput = {
  elemMatch?: Maybe<ContentfulPhotoFilterInput>
}

export type ContentfulPhotographer = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  instagram?: Maybe<Scalars['String']>
  photo?: Maybe<Array<Maybe<ContentfulPhoto>>>
  gallery?: Maybe<Array<Maybe<ContentfulGallery>>>
  spaceId?: Maybe<Scalars['String']>
  contentful_id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  sys?: Maybe<ContentfulPhotographerSys>
  node_locale?: Maybe<Scalars['String']>
}

export type ContentfulPhotographerCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulPhotographerUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulPhotographerConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPhotographerEdge>
  nodes: Array<ContentfulPhotographer>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulPhotographerGroupConnection>
}

export type ContentfulPhotographerConnectionDistinctArgs = {
  field: ContentfulPhotographerFieldsEnum
}

export type ContentfulPhotographerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulPhotographerFieldsEnum
}

export type ContentfulPhotographerEdge = {
  next?: Maybe<ContentfulPhotographer>
  node: ContentfulPhotographer
  previous?: Maybe<ContentfulPhotographer>
}

export type ContentfulPhotographerFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'slug'
  | 'instagram'
  | 'photo'
  | 'photo___id'
  | 'photo___parent___id'
  | 'photo___parent___parent___id'
  | 'photo___parent___parent___children'
  | 'photo___parent___children'
  | 'photo___parent___children___id'
  | 'photo___parent___children___children'
  | 'photo___parent___internal___content'
  | 'photo___parent___internal___contentDigest'
  | 'photo___parent___internal___description'
  | 'photo___parent___internal___fieldOwners'
  | 'photo___parent___internal___ignoreType'
  | 'photo___parent___internal___mediaType'
  | 'photo___parent___internal___owner'
  | 'photo___parent___internal___type'
  | 'photo___children'
  | 'photo___children___id'
  | 'photo___children___parent___id'
  | 'photo___children___parent___children'
  | 'photo___children___children'
  | 'photo___children___children___id'
  | 'photo___children___children___children'
  | 'photo___children___internal___content'
  | 'photo___children___internal___contentDigest'
  | 'photo___children___internal___description'
  | 'photo___children___internal___fieldOwners'
  | 'photo___children___internal___ignoreType'
  | 'photo___children___internal___mediaType'
  | 'photo___children___internal___owner'
  | 'photo___children___internal___type'
  | 'photo___internal___content'
  | 'photo___internal___contentDigest'
  | 'photo___internal___description'
  | 'photo___internal___fieldOwners'
  | 'photo___internal___ignoreType'
  | 'photo___internal___mediaType'
  | 'photo___internal___owner'
  | 'photo___internal___type'
  | 'photo___title'
  | 'photo___photo___id'
  | 'photo___photo___parent___id'
  | 'photo___photo___parent___children'
  | 'photo___photo___children'
  | 'photo___photo___children___id'
  | 'photo___photo___children___children'
  | 'photo___photo___internal___content'
  | 'photo___photo___internal___contentDigest'
  | 'photo___photo___internal___description'
  | 'photo___photo___internal___fieldOwners'
  | 'photo___photo___internal___ignoreType'
  | 'photo___photo___internal___mediaType'
  | 'photo___photo___internal___owner'
  | 'photo___photo___internal___type'
  | 'photo___photo___contentful_id'
  | 'photo___photo___spaceId'
  | 'photo___photo___createdAt'
  | 'photo___photo___updatedAt'
  | 'photo___photo___file___url'
  | 'photo___photo___file___fileName'
  | 'photo___photo___file___contentType'
  | 'photo___photo___title'
  | 'photo___photo___description'
  | 'photo___photo___node_locale'
  | 'photo___photo___sys___revision'
  | 'photo___photo___fixed___base64'
  | 'photo___photo___fixed___tracedSVG'
  | 'photo___photo___fixed___aspectRatio'
  | 'photo___photo___fixed___width'
  | 'photo___photo___fixed___height'
  | 'photo___photo___fixed___src'
  | 'photo___photo___fixed___srcSet'
  | 'photo___photo___fixed___srcWebp'
  | 'photo___photo___fixed___srcSetWebp'
  | 'photo___photo___resolutions___base64'
  | 'photo___photo___resolutions___tracedSVG'
  | 'photo___photo___resolutions___aspectRatio'
  | 'photo___photo___resolutions___width'
  | 'photo___photo___resolutions___height'
  | 'photo___photo___resolutions___src'
  | 'photo___photo___resolutions___srcSet'
  | 'photo___photo___resolutions___srcWebp'
  | 'photo___photo___resolutions___srcSetWebp'
  | 'photo___photo___fluid___base64'
  | 'photo___photo___fluid___tracedSVG'
  | 'photo___photo___fluid___aspectRatio'
  | 'photo___photo___fluid___src'
  | 'photo___photo___fluid___srcSet'
  | 'photo___photo___fluid___srcWebp'
  | 'photo___photo___fluid___srcSetWebp'
  | 'photo___photo___fluid___sizes'
  | 'photo___photo___sizes___base64'
  | 'photo___photo___sizes___tracedSVG'
  | 'photo___photo___sizes___aspectRatio'
  | 'photo___photo___sizes___src'
  | 'photo___photo___sizes___srcSet'
  | 'photo___photo___sizes___srcWebp'
  | 'photo___photo___sizes___srcSetWebp'
  | 'photo___photo___sizes___sizes'
  | 'photo___photo___resize___base64'
  | 'photo___photo___resize___tracedSVG'
  | 'photo___photo___resize___src'
  | 'photo___photo___resize___width'
  | 'photo___photo___resize___height'
  | 'photo___photo___resize___aspectRatio'
  | 'photo___photographer___id'
  | 'photo___photographer___parent___id'
  | 'photo___photographer___parent___children'
  | 'photo___photographer___children'
  | 'photo___photographer___children___id'
  | 'photo___photographer___children___children'
  | 'photo___photographer___internal___content'
  | 'photo___photographer___internal___contentDigest'
  | 'photo___photographer___internal___description'
  | 'photo___photographer___internal___fieldOwners'
  | 'photo___photographer___internal___ignoreType'
  | 'photo___photographer___internal___mediaType'
  | 'photo___photographer___internal___owner'
  | 'photo___photographer___internal___type'
  | 'photo___photographer___name'
  | 'photo___photographer___slug'
  | 'photo___photographer___instagram'
  | 'photo___photographer___photo'
  | 'photo___photographer___photo___id'
  | 'photo___photographer___photo___children'
  | 'photo___photographer___photo___title'
  | 'photo___photographer___photo___gallery'
  | 'photo___photographer___photo___spaceId'
  | 'photo___photographer___photo___contentful_id'
  | 'photo___photographer___photo___createdAt'
  | 'photo___photographer___photo___updatedAt'
  | 'photo___photographer___photo___node_locale'
  | 'photo___photographer___photo___top'
  | 'photo___photographer___gallery'
  | 'photo___photographer___gallery___id'
  | 'photo___photographer___gallery___children'
  | 'photo___photographer___gallery___title'
  | 'photo___photographer___gallery___photos'
  | 'photo___photographer___gallery___spaceId'
  | 'photo___photographer___gallery___contentful_id'
  | 'photo___photographer___gallery___createdAt'
  | 'photo___photographer___gallery___updatedAt'
  | 'photo___photographer___gallery___node_locale'
  | 'photo___photographer___spaceId'
  | 'photo___photographer___contentful_id'
  | 'photo___photographer___createdAt'
  | 'photo___photographer___updatedAt'
  | 'photo___photographer___sys___revision'
  | 'photo___photographer___node_locale'
  | 'photo___gallery'
  | 'photo___gallery___id'
  | 'photo___gallery___parent___id'
  | 'photo___gallery___parent___children'
  | 'photo___gallery___children'
  | 'photo___gallery___children___id'
  | 'photo___gallery___children___children'
  | 'photo___gallery___internal___content'
  | 'photo___gallery___internal___contentDigest'
  | 'photo___gallery___internal___description'
  | 'photo___gallery___internal___fieldOwners'
  | 'photo___gallery___internal___ignoreType'
  | 'photo___gallery___internal___mediaType'
  | 'photo___gallery___internal___owner'
  | 'photo___gallery___internal___type'
  | 'photo___gallery___title'
  | 'photo___gallery___photos'
  | 'photo___gallery___photos___id'
  | 'photo___gallery___photos___children'
  | 'photo___gallery___photos___title'
  | 'photo___gallery___photos___gallery'
  | 'photo___gallery___photos___spaceId'
  | 'photo___gallery___photos___contentful_id'
  | 'photo___gallery___photos___createdAt'
  | 'photo___gallery___photos___updatedAt'
  | 'photo___gallery___photos___node_locale'
  | 'photo___gallery___photos___top'
  | 'photo___gallery___photographer___id'
  | 'photo___gallery___photographer___children'
  | 'photo___gallery___photographer___name'
  | 'photo___gallery___photographer___slug'
  | 'photo___gallery___photographer___instagram'
  | 'photo___gallery___photographer___photo'
  | 'photo___gallery___photographer___gallery'
  | 'photo___gallery___photographer___spaceId'
  | 'photo___gallery___photographer___contentful_id'
  | 'photo___gallery___photographer___createdAt'
  | 'photo___gallery___photographer___updatedAt'
  | 'photo___gallery___photographer___node_locale'
  | 'photo___gallery___spaceId'
  | 'photo___gallery___contentful_id'
  | 'photo___gallery___createdAt'
  | 'photo___gallery___updatedAt'
  | 'photo___gallery___sys___revision'
  | 'photo___gallery___node_locale'
  | 'photo___spaceId'
  | 'photo___contentful_id'
  | 'photo___createdAt'
  | 'photo___updatedAt'
  | 'photo___sys___revision'
  | 'photo___node_locale'
  | 'photo___top'
  | 'photo___top___id'
  | 'photo___top___parent___id'
  | 'photo___top___parent___children'
  | 'photo___top___children'
  | 'photo___top___children___id'
  | 'photo___top___children___children'
  | 'photo___top___internal___content'
  | 'photo___top___internal___contentDigest'
  | 'photo___top___internal___description'
  | 'photo___top___internal___fieldOwners'
  | 'photo___top___internal___ignoreType'
  | 'photo___top___internal___mediaType'
  | 'photo___top___internal___owner'
  | 'photo___top___internal___type'
  | 'photo___top___title'
  | 'photo___top___photos'
  | 'photo___top___photos___id'
  | 'photo___top___photos___children'
  | 'photo___top___photos___title'
  | 'photo___top___photos___gallery'
  | 'photo___top___photos___spaceId'
  | 'photo___top___photos___contentful_id'
  | 'photo___top___photos___createdAt'
  | 'photo___top___photos___updatedAt'
  | 'photo___top___photos___node_locale'
  | 'photo___top___photos___top'
  | 'photo___top___spaceId'
  | 'photo___top___contentful_id'
  | 'photo___top___createdAt'
  | 'photo___top___updatedAt'
  | 'photo___top___sys___revision'
  | 'photo___top___node_locale'
  | 'gallery'
  | 'gallery___id'
  | 'gallery___parent___id'
  | 'gallery___parent___parent___id'
  | 'gallery___parent___parent___children'
  | 'gallery___parent___children'
  | 'gallery___parent___children___id'
  | 'gallery___parent___children___children'
  | 'gallery___parent___internal___content'
  | 'gallery___parent___internal___contentDigest'
  | 'gallery___parent___internal___description'
  | 'gallery___parent___internal___fieldOwners'
  | 'gallery___parent___internal___ignoreType'
  | 'gallery___parent___internal___mediaType'
  | 'gallery___parent___internal___owner'
  | 'gallery___parent___internal___type'
  | 'gallery___children'
  | 'gallery___children___id'
  | 'gallery___children___parent___id'
  | 'gallery___children___parent___children'
  | 'gallery___children___children'
  | 'gallery___children___children___id'
  | 'gallery___children___children___children'
  | 'gallery___children___internal___content'
  | 'gallery___children___internal___contentDigest'
  | 'gallery___children___internal___description'
  | 'gallery___children___internal___fieldOwners'
  | 'gallery___children___internal___ignoreType'
  | 'gallery___children___internal___mediaType'
  | 'gallery___children___internal___owner'
  | 'gallery___children___internal___type'
  | 'gallery___internal___content'
  | 'gallery___internal___contentDigest'
  | 'gallery___internal___description'
  | 'gallery___internal___fieldOwners'
  | 'gallery___internal___ignoreType'
  | 'gallery___internal___mediaType'
  | 'gallery___internal___owner'
  | 'gallery___internal___type'
  | 'gallery___title'
  | 'gallery___photos'
  | 'gallery___photos___id'
  | 'gallery___photos___parent___id'
  | 'gallery___photos___parent___children'
  | 'gallery___photos___children'
  | 'gallery___photos___children___id'
  | 'gallery___photos___children___children'
  | 'gallery___photos___internal___content'
  | 'gallery___photos___internal___contentDigest'
  | 'gallery___photos___internal___description'
  | 'gallery___photos___internal___fieldOwners'
  | 'gallery___photos___internal___ignoreType'
  | 'gallery___photos___internal___mediaType'
  | 'gallery___photos___internal___owner'
  | 'gallery___photos___internal___type'
  | 'gallery___photos___title'
  | 'gallery___photos___photo___id'
  | 'gallery___photos___photo___children'
  | 'gallery___photos___photo___contentful_id'
  | 'gallery___photos___photo___spaceId'
  | 'gallery___photos___photo___createdAt'
  | 'gallery___photos___photo___updatedAt'
  | 'gallery___photos___photo___title'
  | 'gallery___photos___photo___description'
  | 'gallery___photos___photo___node_locale'
  | 'gallery___photos___photographer___id'
  | 'gallery___photos___photographer___children'
  | 'gallery___photos___photographer___name'
  | 'gallery___photos___photographer___slug'
  | 'gallery___photos___photographer___instagram'
  | 'gallery___photos___photographer___photo'
  | 'gallery___photos___photographer___gallery'
  | 'gallery___photos___photographer___spaceId'
  | 'gallery___photos___photographer___contentful_id'
  | 'gallery___photos___photographer___createdAt'
  | 'gallery___photos___photographer___updatedAt'
  | 'gallery___photos___photographer___node_locale'
  | 'gallery___photos___gallery'
  | 'gallery___photos___gallery___id'
  | 'gallery___photos___gallery___children'
  | 'gallery___photos___gallery___title'
  | 'gallery___photos___gallery___photos'
  | 'gallery___photos___gallery___spaceId'
  | 'gallery___photos___gallery___contentful_id'
  | 'gallery___photos___gallery___createdAt'
  | 'gallery___photos___gallery___updatedAt'
  | 'gallery___photos___gallery___node_locale'
  | 'gallery___photos___spaceId'
  | 'gallery___photos___contentful_id'
  | 'gallery___photos___createdAt'
  | 'gallery___photos___updatedAt'
  | 'gallery___photos___sys___revision'
  | 'gallery___photos___node_locale'
  | 'gallery___photos___top'
  | 'gallery___photos___top___id'
  | 'gallery___photos___top___children'
  | 'gallery___photos___top___title'
  | 'gallery___photos___top___photos'
  | 'gallery___photos___top___spaceId'
  | 'gallery___photos___top___contentful_id'
  | 'gallery___photos___top___createdAt'
  | 'gallery___photos___top___updatedAt'
  | 'gallery___photos___top___node_locale'
  | 'gallery___photographer___id'
  | 'gallery___photographer___parent___id'
  | 'gallery___photographer___parent___children'
  | 'gallery___photographer___children'
  | 'gallery___photographer___children___id'
  | 'gallery___photographer___children___children'
  | 'gallery___photographer___internal___content'
  | 'gallery___photographer___internal___contentDigest'
  | 'gallery___photographer___internal___description'
  | 'gallery___photographer___internal___fieldOwners'
  | 'gallery___photographer___internal___ignoreType'
  | 'gallery___photographer___internal___mediaType'
  | 'gallery___photographer___internal___owner'
  | 'gallery___photographer___internal___type'
  | 'gallery___photographer___name'
  | 'gallery___photographer___slug'
  | 'gallery___photographer___instagram'
  | 'gallery___photographer___photo'
  | 'gallery___photographer___photo___id'
  | 'gallery___photographer___photo___children'
  | 'gallery___photographer___photo___title'
  | 'gallery___photographer___photo___gallery'
  | 'gallery___photographer___photo___spaceId'
  | 'gallery___photographer___photo___contentful_id'
  | 'gallery___photographer___photo___createdAt'
  | 'gallery___photographer___photo___updatedAt'
  | 'gallery___photographer___photo___node_locale'
  | 'gallery___photographer___photo___top'
  | 'gallery___photographer___gallery'
  | 'gallery___photographer___gallery___id'
  | 'gallery___photographer___gallery___children'
  | 'gallery___photographer___gallery___title'
  | 'gallery___photographer___gallery___photos'
  | 'gallery___photographer___gallery___spaceId'
  | 'gallery___photographer___gallery___contentful_id'
  | 'gallery___photographer___gallery___createdAt'
  | 'gallery___photographer___gallery___updatedAt'
  | 'gallery___photographer___gallery___node_locale'
  | 'gallery___photographer___spaceId'
  | 'gallery___photographer___contentful_id'
  | 'gallery___photographer___createdAt'
  | 'gallery___photographer___updatedAt'
  | 'gallery___photographer___sys___revision'
  | 'gallery___photographer___node_locale'
  | 'gallery___spaceId'
  | 'gallery___contentful_id'
  | 'gallery___createdAt'
  | 'gallery___updatedAt'
  | 'gallery___sys___revision'
  | 'gallery___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'

export type ContentfulPhotographerFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  instagram?: Maybe<StringQueryOperatorInput>
  photo?: Maybe<ContentfulPhotoFilterListInput>
  gallery?: Maybe<ContentfulGalleryFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulPhotographerSysFilterInput>
  node_locale?: Maybe<StringQueryOperatorInput>
}

export type ContentfulPhotographerGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPhotographerEdge>
  nodes: Array<ContentfulPhotographer>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPhotographerSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPhotographerFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulPhotographerSys = {
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulPhotographerSysContentType>
}

export type ContentfulPhotographerSysContentType = {
  sys?: Maybe<ContentfulPhotographerSysContentTypeSys>
}

export type ContentfulPhotographerSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPhotographerSysContentTypeSysFilterInput>
}

export type ContentfulPhotographerSysContentTypeSys = {
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  contentful_id?: Maybe<Scalars['String']>
}

export type ContentfulPhotographerSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulPhotographerSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulPhotographerSysContentTypeFilterInput>
}

export type ContentfulPhotoGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPhotoEdge>
  nodes: Array<ContentfulPhoto>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPhotoSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPhotoFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulPhotoSys = {
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulPhotoSysContentType>
}

export type ContentfulPhotoSysContentType = {
  sys?: Maybe<ContentfulPhotoSysContentTypeSys>
}

export type ContentfulPhotoSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPhotoSysContentTypeSysFilterInput>
}

export type ContentfulPhotoSysContentTypeSys = {
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  contentful_id?: Maybe<Scalars['String']>
}

export type ContentfulPhotoSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulPhotoSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulPhotoSysContentTypeFilterInput>
}

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  src?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
}

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
}

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
}

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
}

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
}

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTop = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  title?: Maybe<Scalars['Date']>
  photos?: Maybe<Array<Maybe<ContentfulPhoto>>>
  spaceId?: Maybe<Scalars['String']>
  contentful_id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  sys?: Maybe<ContentfulTopSys>
  node_locale?: Maybe<Scalars['String']>
}

export type ContentfulTopTitleArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulTopCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulTopUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulTopConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulTopEdge>
  nodes: Array<ContentfulTop>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulTopGroupConnection>
}

export type ContentfulTopConnectionDistinctArgs = {
  field: ContentfulTopFieldsEnum
}

export type ContentfulTopConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulTopFieldsEnum
}

export type ContentfulTopEdge = {
  next?: Maybe<ContentfulTop>
  node: ContentfulTop
  previous?: Maybe<ContentfulTop>
}

export type ContentfulTopFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'photos'
  | 'photos___id'
  | 'photos___parent___id'
  | 'photos___parent___parent___id'
  | 'photos___parent___parent___children'
  | 'photos___parent___children'
  | 'photos___parent___children___id'
  | 'photos___parent___children___children'
  | 'photos___parent___internal___content'
  | 'photos___parent___internal___contentDigest'
  | 'photos___parent___internal___description'
  | 'photos___parent___internal___fieldOwners'
  | 'photos___parent___internal___ignoreType'
  | 'photos___parent___internal___mediaType'
  | 'photos___parent___internal___owner'
  | 'photos___parent___internal___type'
  | 'photos___children'
  | 'photos___children___id'
  | 'photos___children___parent___id'
  | 'photos___children___parent___children'
  | 'photos___children___children'
  | 'photos___children___children___id'
  | 'photos___children___children___children'
  | 'photos___children___internal___content'
  | 'photos___children___internal___contentDigest'
  | 'photos___children___internal___description'
  | 'photos___children___internal___fieldOwners'
  | 'photos___children___internal___ignoreType'
  | 'photos___children___internal___mediaType'
  | 'photos___children___internal___owner'
  | 'photos___children___internal___type'
  | 'photos___internal___content'
  | 'photos___internal___contentDigest'
  | 'photos___internal___description'
  | 'photos___internal___fieldOwners'
  | 'photos___internal___ignoreType'
  | 'photos___internal___mediaType'
  | 'photos___internal___owner'
  | 'photos___internal___type'
  | 'photos___title'
  | 'photos___photo___id'
  | 'photos___photo___parent___id'
  | 'photos___photo___parent___children'
  | 'photos___photo___children'
  | 'photos___photo___children___id'
  | 'photos___photo___children___children'
  | 'photos___photo___internal___content'
  | 'photos___photo___internal___contentDigest'
  | 'photos___photo___internal___description'
  | 'photos___photo___internal___fieldOwners'
  | 'photos___photo___internal___ignoreType'
  | 'photos___photo___internal___mediaType'
  | 'photos___photo___internal___owner'
  | 'photos___photo___internal___type'
  | 'photos___photo___contentful_id'
  | 'photos___photo___spaceId'
  | 'photos___photo___createdAt'
  | 'photos___photo___updatedAt'
  | 'photos___photo___file___url'
  | 'photos___photo___file___fileName'
  | 'photos___photo___file___contentType'
  | 'photos___photo___title'
  | 'photos___photo___description'
  | 'photos___photo___node_locale'
  | 'photos___photo___sys___revision'
  | 'photos___photo___fixed___base64'
  | 'photos___photo___fixed___tracedSVG'
  | 'photos___photo___fixed___aspectRatio'
  | 'photos___photo___fixed___width'
  | 'photos___photo___fixed___height'
  | 'photos___photo___fixed___src'
  | 'photos___photo___fixed___srcSet'
  | 'photos___photo___fixed___srcWebp'
  | 'photos___photo___fixed___srcSetWebp'
  | 'photos___photo___resolutions___base64'
  | 'photos___photo___resolutions___tracedSVG'
  | 'photos___photo___resolutions___aspectRatio'
  | 'photos___photo___resolutions___width'
  | 'photos___photo___resolutions___height'
  | 'photos___photo___resolutions___src'
  | 'photos___photo___resolutions___srcSet'
  | 'photos___photo___resolutions___srcWebp'
  | 'photos___photo___resolutions___srcSetWebp'
  | 'photos___photo___fluid___base64'
  | 'photos___photo___fluid___tracedSVG'
  | 'photos___photo___fluid___aspectRatio'
  | 'photos___photo___fluid___src'
  | 'photos___photo___fluid___srcSet'
  | 'photos___photo___fluid___srcWebp'
  | 'photos___photo___fluid___srcSetWebp'
  | 'photos___photo___fluid___sizes'
  | 'photos___photo___sizes___base64'
  | 'photos___photo___sizes___tracedSVG'
  | 'photos___photo___sizes___aspectRatio'
  | 'photos___photo___sizes___src'
  | 'photos___photo___sizes___srcSet'
  | 'photos___photo___sizes___srcWebp'
  | 'photos___photo___sizes___srcSetWebp'
  | 'photos___photo___sizes___sizes'
  | 'photos___photo___resize___base64'
  | 'photos___photo___resize___tracedSVG'
  | 'photos___photo___resize___src'
  | 'photos___photo___resize___width'
  | 'photos___photo___resize___height'
  | 'photos___photo___resize___aspectRatio'
  | 'photos___photographer___id'
  | 'photos___photographer___parent___id'
  | 'photos___photographer___parent___children'
  | 'photos___photographer___children'
  | 'photos___photographer___children___id'
  | 'photos___photographer___children___children'
  | 'photos___photographer___internal___content'
  | 'photos___photographer___internal___contentDigest'
  | 'photos___photographer___internal___description'
  | 'photos___photographer___internal___fieldOwners'
  | 'photos___photographer___internal___ignoreType'
  | 'photos___photographer___internal___mediaType'
  | 'photos___photographer___internal___owner'
  | 'photos___photographer___internal___type'
  | 'photos___photographer___name'
  | 'photos___photographer___slug'
  | 'photos___photographer___instagram'
  | 'photos___photographer___photo'
  | 'photos___photographer___photo___id'
  | 'photos___photographer___photo___children'
  | 'photos___photographer___photo___title'
  | 'photos___photographer___photo___gallery'
  | 'photos___photographer___photo___spaceId'
  | 'photos___photographer___photo___contentful_id'
  | 'photos___photographer___photo___createdAt'
  | 'photos___photographer___photo___updatedAt'
  | 'photos___photographer___photo___node_locale'
  | 'photos___photographer___photo___top'
  | 'photos___photographer___gallery'
  | 'photos___photographer___gallery___id'
  | 'photos___photographer___gallery___children'
  | 'photos___photographer___gallery___title'
  | 'photos___photographer___gallery___photos'
  | 'photos___photographer___gallery___spaceId'
  | 'photos___photographer___gallery___contentful_id'
  | 'photos___photographer___gallery___createdAt'
  | 'photos___photographer___gallery___updatedAt'
  | 'photos___photographer___gallery___node_locale'
  | 'photos___photographer___spaceId'
  | 'photos___photographer___contentful_id'
  | 'photos___photographer___createdAt'
  | 'photos___photographer___updatedAt'
  | 'photos___photographer___sys___revision'
  | 'photos___photographer___node_locale'
  | 'photos___gallery'
  | 'photos___gallery___id'
  | 'photos___gallery___parent___id'
  | 'photos___gallery___parent___children'
  | 'photos___gallery___children'
  | 'photos___gallery___children___id'
  | 'photos___gallery___children___children'
  | 'photos___gallery___internal___content'
  | 'photos___gallery___internal___contentDigest'
  | 'photos___gallery___internal___description'
  | 'photos___gallery___internal___fieldOwners'
  | 'photos___gallery___internal___ignoreType'
  | 'photos___gallery___internal___mediaType'
  | 'photos___gallery___internal___owner'
  | 'photos___gallery___internal___type'
  | 'photos___gallery___title'
  | 'photos___gallery___photos'
  | 'photos___gallery___photos___id'
  | 'photos___gallery___photos___children'
  | 'photos___gallery___photos___title'
  | 'photos___gallery___photos___gallery'
  | 'photos___gallery___photos___spaceId'
  | 'photos___gallery___photos___contentful_id'
  | 'photos___gallery___photos___createdAt'
  | 'photos___gallery___photos___updatedAt'
  | 'photos___gallery___photos___node_locale'
  | 'photos___gallery___photos___top'
  | 'photos___gallery___photographer___id'
  | 'photos___gallery___photographer___children'
  | 'photos___gallery___photographer___name'
  | 'photos___gallery___photographer___slug'
  | 'photos___gallery___photographer___instagram'
  | 'photos___gallery___photographer___photo'
  | 'photos___gallery___photographer___gallery'
  | 'photos___gallery___photographer___spaceId'
  | 'photos___gallery___photographer___contentful_id'
  | 'photos___gallery___photographer___createdAt'
  | 'photos___gallery___photographer___updatedAt'
  | 'photos___gallery___photographer___node_locale'
  | 'photos___gallery___spaceId'
  | 'photos___gallery___contentful_id'
  | 'photos___gallery___createdAt'
  | 'photos___gallery___updatedAt'
  | 'photos___gallery___sys___revision'
  | 'photos___gallery___node_locale'
  | 'photos___spaceId'
  | 'photos___contentful_id'
  | 'photos___createdAt'
  | 'photos___updatedAt'
  | 'photos___sys___revision'
  | 'photos___node_locale'
  | 'photos___top'
  | 'photos___top___id'
  | 'photos___top___parent___id'
  | 'photos___top___parent___children'
  | 'photos___top___children'
  | 'photos___top___children___id'
  | 'photos___top___children___children'
  | 'photos___top___internal___content'
  | 'photos___top___internal___contentDigest'
  | 'photos___top___internal___description'
  | 'photos___top___internal___fieldOwners'
  | 'photos___top___internal___ignoreType'
  | 'photos___top___internal___mediaType'
  | 'photos___top___internal___owner'
  | 'photos___top___internal___type'
  | 'photos___top___title'
  | 'photos___top___photos'
  | 'photos___top___photos___id'
  | 'photos___top___photos___children'
  | 'photos___top___photos___title'
  | 'photos___top___photos___gallery'
  | 'photos___top___photos___spaceId'
  | 'photos___top___photos___contentful_id'
  | 'photos___top___photos___createdAt'
  | 'photos___top___photos___updatedAt'
  | 'photos___top___photos___node_locale'
  | 'photos___top___photos___top'
  | 'photos___top___spaceId'
  | 'photos___top___contentful_id'
  | 'photos___top___createdAt'
  | 'photos___top___updatedAt'
  | 'photos___top___sys___revision'
  | 'photos___top___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'

export type ContentfulTopFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<DateQueryOperatorInput>
  photos?: Maybe<ContentfulPhotoFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulTopSysFilterInput>
  node_locale?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTopFilterListInput = {
  elemMatch?: Maybe<ContentfulTopFilterInput>
}

export type ContentfulTopGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulTopEdge>
  nodes: Array<ContentfulTop>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulTopSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTopFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulTopSys = {
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulTopSysContentType>
}

export type ContentfulTopSysContentType = {
  sys?: Maybe<ContentfulTopSysContentTypeSys>
}

export type ContentfulTopSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulTopSysContentTypeSysFilterInput>
}

export type ContentfulTopSysContentTypeSys = {
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  contentful_id?: Maybe<Scalars['String']>
}

export type ContentfulTopSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTopSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulTopSysContentTypeFilterInput>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type File = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type FileGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE'

export type Internal = {
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type Query = {
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  contentfulAsset?: Maybe<ContentfulAsset>
  allContentfulAsset: ContentfulAssetConnection
  contentfulGallery?: Maybe<ContentfulGallery>
  allContentfulGallery: ContentfulGalleryConnection
  contentfulTop?: Maybe<ContentfulTop>
  allContentfulTop: ContentfulTopConnection
  contentfulPhoto?: Maybe<ContentfulPhoto>
  allContentfulPhoto: ContentfulPhotoConnection
  contentfulPhotographer?: Maybe<ContentfulPhotographer>
  allContentfulPhotographer: ContentfulPhotographerConnection
  contentfulContentType?: Maybe<ContentfulContentType>
  allContentfulContentType: ContentfulContentTypeConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<DateQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  file?: Maybe<ContentfulAssetFileFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulAssetSysFilterInput>
  fixed?: Maybe<ContentfulFixedFilterInput>
  resolutions?: Maybe<ContentfulResolutionsFilterInput>
  fluid?: Maybe<ContentfulFluidFilterInput>
  sizes?: Maybe<ContentfulSizesFilterInput>
  resize?: Maybe<ContentfulResizeFilterInput>
}

export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>
  sort?: Maybe<ContentfulAssetSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulGalleryArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  photos?: Maybe<ContentfulPhotoFilterListInput>
  photographer?: Maybe<ContentfulPhotographerFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulGallerySysFilterInput>
  node_locale?: Maybe<StringQueryOperatorInput>
}

export type QueryAllContentfulGalleryArgs = {
  filter?: Maybe<ContentfulGalleryFilterInput>
  sort?: Maybe<ContentfulGallerySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulTopArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<DateQueryOperatorInput>
  photos?: Maybe<ContentfulPhotoFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulTopSysFilterInput>
  node_locale?: Maybe<StringQueryOperatorInput>
}

export type QueryAllContentfulTopArgs = {
  filter?: Maybe<ContentfulTopFilterInput>
  sort?: Maybe<ContentfulTopSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulPhotoArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  photo?: Maybe<ContentfulAssetFilterInput>
  photographer?: Maybe<ContentfulPhotographerFilterInput>
  gallery?: Maybe<ContentfulGalleryFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulPhotoSysFilterInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  top?: Maybe<ContentfulTopFilterListInput>
}

export type QueryAllContentfulPhotoArgs = {
  filter?: Maybe<ContentfulPhotoFilterInput>
  sort?: Maybe<ContentfulPhotoSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulPhotographerArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  instagram?: Maybe<StringQueryOperatorInput>
  photo?: Maybe<ContentfulPhotoFilterListInput>
  gallery?: Maybe<ContentfulGalleryFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulPhotographerSysFilterInput>
  node_locale?: Maybe<StringQueryOperatorInput>
}

export type QueryAllContentfulPhotographerArgs = {
  filter?: Maybe<ContentfulPhotographerFilterInput>
  sort?: Maybe<ContentfulPhotographerSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  displayField?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
}

export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>
  sort?: Maybe<ContentfulContentTypeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Date']>
  host?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime'

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<DateQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
  componentPath?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  photographer?: Maybe<Scalars['String']>
  instagram?: Maybe<Scalars['String']>
}

export type SitePageContextFilterInput = {
  photographer?: Maybe<StringQueryOperatorInput>
  instagram?: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___photographer'
  | 'context___instagram'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___logo'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___google___families'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath'

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___logo'
  | 'pluginOptions___fileName'
  | 'pluginOptions___google___families'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords'

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  logo?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  google?: Maybe<SitePluginPluginOptionsGoogle>
  spaceId?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  pathCheck?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsFilterInput = {
  logo?: Maybe<StringQueryOperatorInput>
  fileName?: Maybe<StringQueryOperatorInput>
  google?: Maybe<SitePluginPluginOptionsGoogleFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  accessToken?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsGoogle = {
  families?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPluginOptionsGoogleFilterInput = {
  families?: Maybe<StringQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SortOrderEnum = 'ASC' | 'DESC'

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type TopPhotoFragment = {
  photo?: Maybe<{
    fluid?: Maybe<Pick<ContentfulFluid, 'src' | 'srcSet' | 'aspectRatio'>>
  }>
}

export type TopQueryVariables = {}

export type TopQuery = {
  contentfulTop?: Maybe<{ photos?: Maybe<Array<Maybe<TopPhotoFragment>>> }>
}

export type GalleryPhotoFragment = Pick<ContentfulPhoto, 'title'> & {
  photo?: Maybe<{
    file?: Maybe<
      Pick<ContentfulAssetFile, 'url'> & {
        details?: Maybe<{
          image?: Maybe<
            Pick<ContentfulAssetFileDetailsImage, 'height' | 'width'>
          >
        }>
      }
    >
  }>
}

export type GalleryQueryVariables = {
  photographer?: Maybe<Scalars['String']>
}

export type GalleryQuery = {
  contentfulGallery?: Maybe<{
    photos?: Maybe<Array<Maybe<GalleryPhotoFragment>>>
  }>
}

export type GatsbyContentfulFixedFragment = Pick<
  ContentfulFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<
  ContentfulFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<
  ContentfulFixed,
  'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyContentfulFixed_WithWebpFragment = Pick<
  ContentfulFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<
  ContentfulFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyContentfulFluidFragment = Pick<
  ContentfulFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<
  ContentfulFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<
  ContentfulFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyContentfulFluid_WithWebpFragment = Pick<
  ContentfulFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<
  ContentfulFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyContentfulResolutionsFragment = Pick<
  ContentfulResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<
  ContentfulResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<
  ContentfulResolutions,
  'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<
  ContentfulResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<
  ContentfulResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyContentfulSizesFragment = Pick<
  ContentfulSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<
  ContentfulSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<
  ContentfulSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyContentfulSizes_WithWebpFragment = Pick<
  ContentfulSizes,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<
  ContentfulSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>
