import type { Record } from "./public/record";

type StringFilterInput = {
    and?: (string | null | undefined)[] | null | undefined;
    between?: (string | null | undefined)[] | null | undefined;
    contains?: string | null | undefined;
    containsi?: string | null | undefined;
    endsWith?: string | null | undefined;
    eq?: string | null | undefined;
    eqi?: string | null | undefined;
    gt?: string | null | undefined;
    gte?: string | null | undefined;
    in?: (string | null | undefined)[] | null | undefined;
    lt?: string | null | undefined;
    lte?: string | null | undefined;
    ne?: string | null | undefined;
    not?: StringFilterInput | null | undefined;
    notContains?: string | null | undefined;
    notContainsi?: string | null | undefined;
    notIn?: (string | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (string | null | undefined)[] | null | undefined;
    startsWith?: string | null | undefined;
};

type DateTimeFilterInput = {
    and?: (any | null | undefined)[] | null | undefined;
    between?: (any | null | undefined)[] | null | undefined;
    contains?: any | null | undefined;
    containsi?: any | null | undefined;
    endsWith?: any | null | undefined;
    eq?: any | null | undefined;
    eqi?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    in?: (any | null | undefined)[] | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    ne?: any | null | undefined;
    not?: DateTimeFilterInput | null | undefined;
    notContains?: any | null | undefined;
    notContainsi?: any | null | undefined;
    notIn?: (any | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (any | null | undefined)[] | null | undefined;
    startsWith?: any | null | undefined;
};

type IDFilterInput = {
    and?: (string | null | undefined)[] | null | undefined;
    between?: (string | null | undefined)[] | null | undefined;
    contains?: string | null | undefined;
    containsi?: string | null | undefined;
    endsWith?: string | null | undefined;
    eq?: string | null | undefined;
    eqi?: string | null | undefined;
    gt?: string | null | undefined;
    gte?: string | null | undefined;
    in?: (string | null | undefined)[] | null | undefined;
    lt?: string | null | undefined;
    lte?: string | null | undefined;
    ne?: string | null | undefined;
    not?: IDFilterInput | null | undefined;
    notContains?: string | null | undefined;
    notContainsi?: string | null | undefined;
    notIn?: (string | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (string | null | undefined)[] | null | undefined;
    startsWith?: string | null | undefined;
};

type IntFilterInput = {
    and?: (number | null | undefined)[] | null | undefined;
    between?: (number | null | undefined)[] | null | undefined;
    contains?: number | null | undefined;
    containsi?: number | null | undefined;
    endsWith?: number | null | undefined;
    eq?: number | null | undefined;
    eqi?: number | null | undefined;
    gt?: number | null | undefined;
    gte?: number | null | undefined;
    in?: (number | null | undefined)[] | null | undefined;
    lt?: number | null | undefined;
    lte?: number | null | undefined;
    ne?: number | null | undefined;
    not?: IntFilterInput | null | undefined;
    notContains?: number | null | undefined;
    notContainsi?: number | null | undefined;
    notIn?: (number | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (number | null | undefined)[] | null | undefined;
    startsWith?: number | null | undefined;
};

type UploadFolderFiltersInput = {
    and?: (UploadFolderFiltersInput | null | undefined)[] | null | undefined;
    children?: UploadFolderFiltersInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    files?: UploadFileFiltersInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: UploadFolderFiltersInput | null | undefined;
    or?: (UploadFolderFiltersInput | null | undefined)[] | null | undefined;
    parent?: UploadFolderFiltersInput | null | undefined;
    path?: StringFilterInput | null | undefined;
    pathId?: IntFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type JSONFilterInput = {
    and?: (any | null | undefined)[] | null | undefined;
    between?: (any | null | undefined)[] | null | undefined;
    contains?: any | null | undefined;
    containsi?: any | null | undefined;
    endsWith?: any | null | undefined;
    eq?: any | null | undefined;
    eqi?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    in?: (any | null | undefined)[] | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    ne?: any | null | undefined;
    not?: JSONFilterInput | null | undefined;
    notContains?: any | null | undefined;
    notContainsi?: any | null | undefined;
    notIn?: (any | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (any | null | undefined)[] | null | undefined;
    startsWith?: any | null | undefined;
};

type FloatFilterInput = {
    and?: (number | null | undefined)[] | null | undefined;
    between?: (number | null | undefined)[] | null | undefined;
    contains?: number | null | undefined;
    containsi?: number | null | undefined;
    endsWith?: number | null | undefined;
    eq?: number | null | undefined;
    eqi?: number | null | undefined;
    gt?: number | null | undefined;
    gte?: number | null | undefined;
    in?: (number | null | undefined)[] | null | undefined;
    lt?: number | null | undefined;
    lte?: number | null | undefined;
    ne?: number | null | undefined;
    not?: FloatFilterInput | null | undefined;
    notContains?: number | null | undefined;
    notContainsi?: number | null | undefined;
    notIn?: (number | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (number | null | undefined)[] | null | undefined;
    startsWith?: number | null | undefined;
};

type UploadFileFiltersInput = {
    alternativeText?: StringFilterInput | null | undefined;
    and?: (UploadFileFiltersInput | null | undefined)[] | null | undefined;
    caption?: StringFilterInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    ext?: StringFilterInput | null | undefined;
    folder?: UploadFolderFiltersInput | null | undefined;
    folderPath?: StringFilterInput | null | undefined;
    formats?: JSONFilterInput | null | undefined;
    hash?: StringFilterInput | null | undefined;
    height?: IntFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    mime?: StringFilterInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: UploadFileFiltersInput | null | undefined;
    or?: (UploadFileFiltersInput | null | undefined)[] | null | undefined;
    previewUrl?: StringFilterInput | null | undefined;
    provider?: StringFilterInput | null | undefined;
    provider_metadata?: JSONFilterInput | null | undefined;
    size?: FloatFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
    url?: StringFilterInput | null | undefined;
    width?: IntFilterInput | null | undefined;
};

type PaginationArg = {
    limit?: number | null | undefined;
    page?: number | null | undefined;
    pageSize?: number | null | undefined;
    start?: number | null | undefined;
};

type BlogTagFiltersInput = {
    and?: (BlogTagFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    locale?: StringFilterInput | null | undefined;
    localizations?: BlogTagFiltersInput | null | undefined;
    not?: BlogTagFiltersInput | null | undefined;
    or?: (BlogTagFiltersInput | null | undefined)[] | null | undefined;
    tag?: StringFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type BlogCategoryFiltersInput = {
    and?: (BlogCategoryFiltersInput | null | undefined)[] | null | undefined;
    category?: StringFilterInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    locale?: StringFilterInput | null | undefined;
    localizations?: BlogCategoryFiltersInput | null | undefined;
    not?: BlogCategoryFiltersInput | null | undefined;
    or?: (BlogCategoryFiltersInput | null | undefined)[] | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type BlogFiltersInput = {
    and?: (BlogFiltersInput | null | undefined)[] | null | undefined;
    article?: StringFilterInput | null | undefined;
    blog_category?: BlogCategoryFiltersInput | null | undefined;
    blog_tags?: BlogTagFiltersInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    locale?: StringFilterInput | null | undefined;
    localizations?: BlogFiltersInput | null | undefined;
    not?: BlogFiltersInput | null | undefined;
    or?: (BlogFiltersInput | null | undefined)[] | null | undefined;
    summary?: StringFilterInput | null | undefined;
    title?: StringFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type CarrouselFiltersInput = {
    and?: (CarrouselFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    locale?: StringFilterInput | null | undefined;
    localizations?: CarrouselFiltersInput | null | undefined;
    not?: CarrouselFiltersInput | null | undefined;
    or?: (CarrouselFiltersInput | null | undefined)[] | null | undefined;
    subtitle?: StringFilterInput | null | undefined;
    title?: StringFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type VillaPictureFiltersInput = {
    and?: (VillaPictureFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    description?: StringFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    locale?: StringFilterInput | null | undefined;
    localizations?: VillaPictureFiltersInput | null | undefined;
    not?: VillaPictureFiltersInput | null | undefined;
    or?: (VillaPictureFiltersInput | null | undefined)[] | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type LanguageTextFiltersInput = {
    and?: (LanguageTextFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    key?: StringFilterInput | null | undefined;
    locale?: StringFilterInput | null | undefined;
    localizations?: LanguageTextFiltersInput | null | undefined;
    not?: LanguageTextFiltersInput | null | undefined;
    or?: (LanguageTextFiltersInput | null | undefined)[] | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
    value?: StringFilterInput | null | undefined;
};

type BooleanFilterInput = {
    and?: (boolean | null | undefined)[] | null | undefined;
    between?: (boolean | null | undefined)[] | null | undefined;
    contains?: boolean | null | undefined;
    containsi?: boolean | null | undefined;
    endsWith?: boolean | null | undefined;
    eq?: boolean | null | undefined;
    eqi?: boolean | null | undefined;
    gt?: boolean | null | undefined;
    gte?: boolean | null | undefined;
    in?: (boolean | null | undefined)[] | null | undefined;
    lt?: boolean | null | undefined;
    lte?: boolean | null | undefined;
    ne?: boolean | null | undefined;
    not?: BooleanFilterInput | null | undefined;
    notContains?: boolean | null | undefined;
    notContainsi?: boolean | null | undefined;
    notIn?: (boolean | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (boolean | null | undefined)[] | null | undefined;
    startsWith?: boolean | null | undefined;
};

type ContactRequestFiltersInput = {
    and?: (ContactRequestFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    done?: BooleanFilterInput | null | undefined;
    email?: StringFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    locale?: StringFilterInput | null | undefined;
    message?: StringFilterInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: ContactRequestFiltersInput | null | undefined;
    or?: (ContactRequestFiltersInput | null | undefined)[] | null | undefined;
    phone?: StringFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type EmailDesignerEmailTemplateFiltersInput = {
    and?: (EmailDesignerEmailTemplateFiltersInput | null | undefined)[] | null | undefined;
    bodyHtml?: StringFilterInput | null | undefined;
    bodyText?: StringFilterInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    design?: JSONFilterInput | null | undefined;
    enabled?: BooleanFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: EmailDesignerEmailTemplateFiltersInput | null | undefined;
    or?: (EmailDesignerEmailTemplateFiltersInput | null | undefined)[] | null | undefined;
    subject?: StringFilterInput | null | undefined;
    tags?: JSONFilterInput | null | undefined;
    templateReferenceId?: IntFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type GuestArticleFiltersInput = {
    and?: (GuestArticleFiltersInput | null | undefined)[] | null | undefined;
    comment?: StringFilterInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    email?: StringFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: GuestArticleFiltersInput | null | undefined;
    or?: (GuestArticleFiltersInput | null | undefined)[] | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type I18NLocaleFiltersInput = {
    and?: (I18NLocaleFiltersInput | null | undefined)[] | null | undefined;
    code?: StringFilterInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: I18NLocaleFiltersInput | null | undefined;
    or?: (I18NLocaleFiltersInput | null | undefined)[] | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type UsersPermissionsPermissionFiltersInput = {
    action?: StringFilterInput | null | undefined;
    and?: (UsersPermissionsPermissionFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    not?: UsersPermissionsPermissionFiltersInput | null | undefined;
    or?: (UsersPermissionsPermissionFiltersInput | null | undefined)[] | null | undefined;
    role?: UsersPermissionsRoleFiltersInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type UsersPermissionsUserFiltersInput = {
    and?: (UsersPermissionsUserFiltersInput | null | undefined)[] | null | undefined;
    blocked?: BooleanFilterInput | null | undefined;
    confirmationToken?: StringFilterInput | null | undefined;
    confirmed?: BooleanFilterInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    email?: StringFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    not?: UsersPermissionsUserFiltersInput | null | undefined;
    or?: (UsersPermissionsUserFiltersInput | null | undefined)[] | null | undefined;
    password?: StringFilterInput | null | undefined;
    provider?: StringFilterInput | null | undefined;
    resetPasswordToken?: StringFilterInput | null | undefined;
    role?: UsersPermissionsRoleFiltersInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
    username?: StringFilterInput | null | undefined;
};

type UsersPermissionsRoleFiltersInput = {
    and?: (UsersPermissionsRoleFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    description?: StringFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: UsersPermissionsRoleFiltersInput | null | undefined;
    or?: (UsersPermissionsRoleFiltersInput | null | undefined)[] | null | undefined;
    permissions?: UsersPermissionsPermissionFiltersInput | null | undefined;
    type?: StringFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
    users?: UsersPermissionsUserFiltersInput | null | undefined;
};

type VacationFacilityFiltersInput = {
    and?: (VacationFacilityFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    description?: StringFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    locale?: StringFilterInput | null | undefined;
    localizations?: VacationFacilityFiltersInput | null | undefined;
    not?: VacationFacilityFiltersInput | null | undefined;
    or?: (VacationFacilityFiltersInput | null | undefined)[] | null | undefined;
    title?: StringFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type VillaFacilityTypeFiltersInput = {
    and?: (VillaFacilityTypeFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    locale?: StringFilterInput | null | undefined;
    localizations?: VillaFacilityTypeFiltersInput | null | undefined;
    not?: VillaFacilityTypeFiltersInput | null | undefined;
    or?: (VillaFacilityTypeFiltersInput | null | undefined)[] | null | undefined;
    title?: StringFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
    villa_facilities?: VillaFacilityFiltersInput | null | undefined;
};

type VillaFacilityFiltersInput = {
    and?: (VillaFacilityFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    locale?: StringFilterInput | null | undefined;
    localizations?: VillaFacilityFiltersInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: VillaFacilityFiltersInput | null | undefined;
    or?: (VillaFacilityFiltersInput | null | undefined)[] | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
    villa_facility_type?: VillaFacilityTypeFiltersInput | null | undefined;
};

type VillaFiltersInput = {
    and?: (VillaFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    description?: StringFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    locale?: StringFilterInput | null | undefined;
    localizations?: VillaFiltersInput | null | undefined;
    minPrice?: IntFilterInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    nbGuests?: IntFilterInput | null | undefined;
    not?: VillaFiltersInput | null | undefined;
    or?: (VillaFiltersInput | null | undefined)[] | null | undefined;
    superficie?: IntFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
    villa_facilities?: VillaFacilityFiltersInput | null | undefined;
    villa_pictures?: VillaPictureFiltersInput | null | undefined;
};

export declare type CacheTypeDef = {
    types: {
        About: {
            idFields: never;
            fields: {
                bgImage: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse">;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                images: {
                    type: Record<CacheTypeDef, "UploadFileRelationResponseCollection">;
                    args: {
                        filters?: UploadFileFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "AboutRelationResponseCollection"> | null;
                    args: never;
                };
                seo: {
                    type: Record<CacheTypeDef, "ComponentSharedSeo"> | null;
                    args: never;
                };
                title: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        AboutEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "About"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        AboutEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "AboutEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        AboutRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "AboutEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        AdvicesPage: {
            idFields: never;
            fields: {
                bgImage: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse">;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "AdvicesPageRelationResponseCollection"> | null;
                    args: never;
                };
                seo: {
                    type: Record<CacheTypeDef, "ComponentSharedSeo"> | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        AdvicesPageEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "AdvicesPage"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        AdvicesPageEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "AdvicesPageEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        AdvicesPageRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "AdvicesPageEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        Blog: {
            idFields: never;
            fields: {
                article: {
                    type: string | null;
                    args: never;
                };
                blog_category: {
                    type: Record<CacheTypeDef, "BlogCategoryEntityResponse"> | null;
                    args: never;
                };
                blog_tags: {
                    type: Record<CacheTypeDef, "BlogTagRelationResponseCollection"> | null;
                    args: {
                        filters?: BlogTagFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                image: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse">;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "BlogRelationResponseCollection"> | null;
                    args: {
                        filters?: BlogFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                summary: {
                    type: string;
                    args: never;
                };
                title: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        BlogCategory: {
            idFields: never;
            fields: {
                category: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "BlogCategoryRelationResponseCollection"> | null;
                    args: {
                        filters?: BlogCategoryFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        BlogCategoryEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "BlogCategory"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        BlogCategoryEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "BlogCategoryEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        BlogCategoryEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "BlogCategoryEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        BlogCategoryRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "BlogCategoryEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        BlogEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "Blog"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        BlogEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "BlogEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        BlogEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "BlogEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        BlogRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "BlogEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        BlogTag: {
            idFields: never;
            fields: {
                createdAt: {
                    type: any | null;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "BlogTagRelationResponseCollection"> | null;
                    args: {
                        filters?: BlogTagFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                tag: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        BlogTagEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "BlogTag"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        BlogTagEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "BlogTagEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        BlogTagEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "BlogTagEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        BlogTagRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "BlogTagEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        BookingPage: {
            idFields: never;
            fields: {
                bg: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse"> | null;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                embedCodeBooking: {
                    type: string | null;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "BookingPageRelationResponseCollection"> | null;
                    args: never;
                };
                seo: {
                    type: Record<CacheTypeDef, "ComponentSharedSeo"> | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        BookingPageEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "BookingPage"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        BookingPageEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "BookingPageEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        BookingPageRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "BookingPageEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        Carrousel: {
            idFields: never;
            fields: {
                background: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse"> | null;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "CarrouselRelationResponseCollection"> | null;
                    args: {
                        filters?: CarrouselFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                subtitle: {
                    type: string | null;
                    args: never;
                };
                title: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CarrouselEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "Carrousel"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CarrouselEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "CarrouselEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CarrouselEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "CarrouselEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        CarrouselRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "CarrouselEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        Common: {
            idFields: never;
            fields: {
                createdAt: {
                    type: any | null;
                    args: never;
                };
                facebook: {
                    type: string | null;
                    args: never;
                };
                instagram: {
                    type: string | null;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "CommonRelationResponseCollection"> | null;
                    args: never;
                };
                logo: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse">;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CommonEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "Common"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CommonEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "CommonEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CommonRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "CommonEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        ComponentImageBgImage: {
            idFields: {
                id: string;
            };
            fields: {
                BgImage: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse">;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ComponentSharedMetaSocial: {
            idFields: {
                id: string;
            };
            fields: {
                description: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                image: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse"> | null;
                    args: never;
                };
                title: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ComponentSharedSeo: {
            idFields: {
                id: string;
            };
            fields: {
                id: {
                    type: string;
                    args: never;
                };
                keywords: {
                    type: string | null;
                    args: never;
                };
                metaDescription: {
                    type: string;
                    args: never;
                };
                metaTitle: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Contact: {
            idFields: never;
            fields: {
                Address: {
                    type: string;
                    args: never;
                };
                bgimage: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse">;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                email: {
                    type: string;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "ContactRelationResponseCollection"> | null;
                    args: never;
                };
                map: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                phone: {
                    type: string;
                    args: never;
                };
                seo: {
                    type: Record<CacheTypeDef, "ComponentSharedSeo"> | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ContactEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "Contact"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ContactEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "ContactEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ContactRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "ContactEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        ContactRequest: {
            idFields: never;
            fields: {
                createdAt: {
                    type: any | null;
                    args: never;
                };
                done: {
                    type: boolean | null;
                    args: never;
                };
                email: {
                    type: string;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                phone: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ContactRequestEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "ContactRequest"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ContactRequestEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "ContactRequestEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ContactRequestEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "ContactRequestEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        EmailDesignerEmailTemplate: {
            idFields: never;
            fields: {
                bodyHtml: {
                    type: string | null;
                    args: never;
                };
                bodyText: {
                    type: string | null;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                design: {
                    type: any | null;
                    args: never;
                };
                enabled: {
                    type: boolean | null;
                    args: never;
                };
                name: {
                    type: string | null;
                    args: never;
                };
                subject: {
                    type: string | null;
                    args: never;
                };
                tags: {
                    type: any | null;
                    args: never;
                };
                templateReferenceId: {
                    type: number | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        EmailDesignerEmailTemplateEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "EmailDesignerEmailTemplate"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        EmailDesignerEmailTemplateEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "EmailDesignerEmailTemplateEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        EmailDesignerEmailTemplateEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "EmailDesignerEmailTemplateEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        Gallery: {
            idFields: never;
            fields: {
                bgimage: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse">;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "GalleryRelationResponseCollection"> | null;
                    args: never;
                };
                seo: {
                    type: Record<CacheTypeDef, "ComponentSharedSeo"> | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
                villa_pictures: {
                    type: Record<CacheTypeDef, "VillaPictureRelationResponseCollection"> | null;
                    args: {
                        filters?: VillaPictureFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
            };
            fragments: [];
        };
        GalleryEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "Gallery"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        GalleryEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "GalleryEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        GalleryRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "GalleryEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        GuestArticle: {
            idFields: never;
            fields: {
                comment: {
                    type: string | null;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                email: {
                    type: string | null;
                    args: never;
                };
                name: {
                    type: string | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        GuestArticleEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "GuestArticle"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        GuestArticleEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "GuestArticleEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        GuestArticleEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "GuestArticleEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        I18NLocale: {
            idFields: never;
            fields: {
                code: {
                    type: string | null;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                name: {
                    type: string | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        I18NLocaleEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "I18NLocale"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        I18NLocaleEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "I18NLocaleEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        I18NLocaleEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "I18NLocaleEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        Landing: {
            idFields: never;
            fields: {
                carrousels: {
                    type: Record<CacheTypeDef, "CarrouselRelationResponseCollection"> | null;
                    args: {
                        filters?: CarrouselFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "LandingRelationResponseCollection"> | null;
                    args: never;
                };
                seo: {
                    type: Record<CacheTypeDef, "ComponentSharedSeo"> | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        LandingEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "Landing"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        LandingEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "LandingEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        LandingRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "LandingEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        LanguageText: {
            idFields: never;
            fields: {
                createdAt: {
                    type: any | null;
                    args: never;
                };
                key: {
                    type: string | null;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "LanguageTextRelationResponseCollection"> | null;
                    args: {
                        filters?: LanguageTextFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
                value: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        LanguageTextEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "LanguageText"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        LanguageTextEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "LanguageTextEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        LanguageTextEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "LanguageTextEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        LanguageTextRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "LanguageTextEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        Pagination: {
            idFields: never;
            fields: {
                page: {
                    type: number;
                    args: never;
                };
                pageCount: {
                    type: number;
                    args: never;
                };
                pageSize: {
                    type: number;
                    args: never;
                };
                total: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        __ROOT__: {
            idFields: {};
            fields: {
                about: {
                    type: Record<CacheTypeDef, "AboutEntityResponse"> | null;
                    args: {
                        locale?: String | null | undefined;
                    };
                };
                advicesPage: {
                    type: Record<CacheTypeDef, "AdvicesPageEntityResponse"> | null;
                    args: {
                        locale?: String | null | undefined;
                    };
                };
                blog: {
                    type: Record<CacheTypeDef, "BlogEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                        locale?: String | null | undefined;
                    };
                };
                blogCategories: {
                    type: Record<CacheTypeDef, "BlogCategoryEntityResponseCollection"> | null;
                    args: {
                        filters?: BlogCategoryFiltersInput | null | undefined;
                        locale?: String | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                blogCategory: {
                    type: Record<CacheTypeDef, "BlogCategoryEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                        locale?: String | null | undefined;
                    };
                };
                blogTag: {
                    type: Record<CacheTypeDef, "BlogTagEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                        locale?: String | null | undefined;
                    };
                };
                blogTags: {
                    type: Record<CacheTypeDef, "BlogTagEntityResponseCollection"> | null;
                    args: {
                        filters?: BlogTagFiltersInput | null | undefined;
                        locale?: String | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                blogs: {
                    type: Record<CacheTypeDef, "BlogEntityResponseCollection"> | null;
                    args: {
                        filters?: BlogFiltersInput | null | undefined;
                        locale?: String | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                bookingPage: {
                    type: Record<CacheTypeDef, "BookingPageEntityResponse"> | null;
                    args: {
                        locale?: String | null | undefined;
                    };
                };
                carrousel: {
                    type: Record<CacheTypeDef, "CarrouselEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                        locale?: String | null | undefined;
                    };
                };
                carrousels: {
                    type: Record<CacheTypeDef, "CarrouselEntityResponseCollection"> | null;
                    args: {
                        filters?: CarrouselFiltersInput | null | undefined;
                        locale?: String | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                common: {
                    type: Record<CacheTypeDef, "CommonEntityResponse"> | null;
                    args: {
                        locale?: String | null | undefined;
                    };
                };
                contact: {
                    type: Record<CacheTypeDef, "ContactEntityResponse"> | null;
                    args: {
                        locale?: String | null | undefined;
                    };
                };
                contactRequest: {
                    type: Record<CacheTypeDef, "ContactRequestEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                contactRequests: {
                    type: Record<CacheTypeDef, "ContactRequestEntityResponseCollection"> | null;
                    args: {
                        filters?: ContactRequestFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                emailDesignerEmailTemplate: {
                    type: Record<CacheTypeDef, "EmailDesignerEmailTemplateEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                emailDesignerEmailTemplates: {
                    type: Record<CacheTypeDef, "EmailDesignerEmailTemplateEntityResponseCollection"> | null;
                    args: {
                        filters?: EmailDesignerEmailTemplateFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                gallery: {
                    type: Record<CacheTypeDef, "GalleryEntityResponse"> | null;
                    args: {
                        locale?: String | null | undefined;
                    };
                };
                guestArticle: {
                    type: Record<CacheTypeDef, "GuestArticleEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                guestArticles: {
                    type: Record<CacheTypeDef, "GuestArticleEntityResponseCollection"> | null;
                    args: {
                        filters?: GuestArticleFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                i18NLocale: {
                    type: Record<CacheTypeDef, "I18NLocaleEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                i18NLocales: {
                    type: Record<CacheTypeDef, "I18NLocaleEntityResponseCollection"> | null;
                    args: {
                        filters?: I18NLocaleFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                landing: {
                    type: Record<CacheTypeDef, "LandingEntityResponse"> | null;
                    args: {
                        locale?: String | null | undefined;
                    };
                };
                languageText: {
                    type: Record<CacheTypeDef, "LanguageTextEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                        locale?: String | null | undefined;
                    };
                };
                languageTexts: {
                    type: Record<CacheTypeDef, "LanguageTextEntityResponseCollection"> | null;
                    args: {
                        filters?: LanguageTextFiltersInput | null | undefined;
                        locale?: String | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                me: {
                    type: Record<CacheTypeDef, "UsersPermissionsMe"> | null;
                    args: never;
                };
                uploadFile: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                uploadFiles: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponseCollection"> | null;
                    args: {
                        filters?: UploadFileFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                uploadFolder: {
                    type: Record<CacheTypeDef, "UploadFolderEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                uploadFolders: {
                    type: Record<CacheTypeDef, "UploadFolderEntityResponseCollection"> | null;
                    args: {
                        filters?: UploadFolderFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                usersPermissionsRole: {
                    type: Record<CacheTypeDef, "UsersPermissionsRoleEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                usersPermissionsRoles: {
                    type: Record<CacheTypeDef, "UsersPermissionsRoleEntityResponseCollection"> | null;
                    args: {
                        filters?: UsersPermissionsRoleFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                usersPermissionsUser: {
                    type: Record<CacheTypeDef, "UsersPermissionsUserEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                usersPermissionsUsers: {
                    type: Record<CacheTypeDef, "UsersPermissionsUserEntityResponseCollection"> | null;
                    args: {
                        filters?: UsersPermissionsUserFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                vacationFacilities: {
                    type: Record<CacheTypeDef, "VacationFacilityEntityResponseCollection"> | null;
                    args: {
                        filters?: VacationFacilityFiltersInput | null | undefined;
                        locale?: String | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                vacationFacility: {
                    type: Record<CacheTypeDef, "VacationFacilityEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                        locale?: String | null | undefined;
                    };
                };
                villa: {
                    type: Record<CacheTypeDef, "VillaEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                        locale?: String | null | undefined;
                    };
                };
                villaFacilities: {
                    type: Record<CacheTypeDef, "VillaFacilityEntityResponseCollection"> | null;
                    args: {
                        filters?: VillaFacilityFiltersInput | null | undefined;
                        locale?: String | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                villaFacility: {
                    type: Record<CacheTypeDef, "VillaFacilityEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                        locale?: String | null | undefined;
                    };
                };
                villaFacilityType: {
                    type: Record<CacheTypeDef, "VillaFacilityTypeEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                        locale?: String | null | undefined;
                    };
                };
                villaFacilityTypes: {
                    type: Record<CacheTypeDef, "VillaFacilityTypeEntityResponseCollection"> | null;
                    args: {
                        filters?: VillaFacilityTypeFiltersInput | null | undefined;
                        locale?: String | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                villaPage: {
                    type: Record<CacheTypeDef, "VillaPageEntityResponse"> | null;
                    args: {
                        locale?: String | null | undefined;
                    };
                };
                villaPicture: {
                    type: Record<CacheTypeDef, "VillaPictureEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                        locale?: String | null | undefined;
                    };
                };
                villaPictures: {
                    type: Record<CacheTypeDef, "VillaPictureEntityResponseCollection"> | null;
                    args: {
                        filters?: VillaPictureFiltersInput | null | undefined;
                        locale?: String | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                villas: {
                    type: Record<CacheTypeDef, "VillaEntityResponseCollection"> | null;
                    args: {
                        filters?: VillaFiltersInput | null | undefined;
                        locale?: String | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                villasPage: {
                    type: Record<CacheTypeDef, "VillasPageEntityResponse"> | null;
                    args: {
                        locale?: String | null | undefined;
                    };
                };
            };
            fragments: [];
        };
        ResponseCollectionMeta: {
            idFields: never;
            fields: {
                pagination: {
                    type: Record<CacheTypeDef, "Pagination">;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFile: {
            idFields: never;
            fields: {
                alternativeText: {
                    type: string | null;
                    args: never;
                };
                caption: {
                    type: string | null;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                ext: {
                    type: string | null;
                    args: never;
                };
                formats: {
                    type: any | null;
                    args: never;
                };
                hash: {
                    type: string;
                    args: never;
                };
                height: {
                    type: number | null;
                    args: never;
                };
                mime: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                previewUrl: {
                    type: string | null;
                    args: never;
                };
                provider: {
                    type: string;
                    args: never;
                };
                provider_metadata: {
                    type: any | null;
                    args: never;
                };
                related: {
                    type: ((Record<CacheTypeDef, "About"> | Record<CacheTypeDef, "AdvicesPage"> | Record<CacheTypeDef, "Blog"> | Record<CacheTypeDef, "BlogCategory"> | Record<CacheTypeDef, "BlogTag"> | Record<CacheTypeDef, "BookingPage"> | Record<CacheTypeDef, "Carrousel"> | Record<CacheTypeDef, "Common"> | Record<CacheTypeDef, "ComponentImageBgImage"> | Record<CacheTypeDef, "ComponentSharedMetaSocial"> | Record<CacheTypeDef, "ComponentSharedSeo"> | Record<CacheTypeDef, "Contact"> | Record<CacheTypeDef, "ContactRequest"> | Record<CacheTypeDef, "EmailDesignerEmailTemplate"> | Record<CacheTypeDef, "Gallery"> | Record<CacheTypeDef, "GuestArticle"> | Record<CacheTypeDef, "I18NLocale"> | Record<CacheTypeDef, "Landing"> | Record<CacheTypeDef, "LanguageText"> | Record<CacheTypeDef, "UploadFile"> | Record<CacheTypeDef, "UploadFolder"> | Record<CacheTypeDef, "UsersPermissionsPermission"> | Record<CacheTypeDef, "UsersPermissionsRole"> | Record<CacheTypeDef, "UsersPermissionsUser"> | Record<CacheTypeDef, "VacationFacility"> | Record<CacheTypeDef, "Villa"> | Record<CacheTypeDef, "VillaFacility"> | Record<CacheTypeDef, "VillaFacilityType"> | Record<CacheTypeDef, "VillaPage"> | Record<CacheTypeDef, "VillaPicture"> | Record<CacheTypeDef, "VillasPage"> | null))[] | null;
                    args: never;
                };
                size: {
                    type: number;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
                url: {
                    type: string;
                    args: never;
                };
                width: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFileEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "UploadFile"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFileEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "UploadFileEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFileEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UploadFileEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFileRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UploadFileEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFolder: {
            idFields: never;
            fields: {
                children: {
                    type: Record<CacheTypeDef, "UploadFolderRelationResponseCollection"> | null;
                    args: {
                        filters?: UploadFolderFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                files: {
                    type: Record<CacheTypeDef, "UploadFileRelationResponseCollection"> | null;
                    args: {
                        filters?: UploadFileFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                name: {
                    type: string;
                    args: never;
                };
                parent: {
                    type: Record<CacheTypeDef, "UploadFolderEntityResponse"> | null;
                    args: never;
                };
                path: {
                    type: string;
                    args: never;
                };
                pathId: {
                    type: number;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFolderEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "UploadFolder"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFolderEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "UploadFolderEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFolderEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UploadFolderEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFolderRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UploadFolderEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsCreateRolePayload: {
            idFields: never;
            fields: {
                ok: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsDeleteRolePayload: {
            idFields: never;
            fields: {
                ok: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsLoginPayload: {
            idFields: never;
            fields: {
                jwt: {
                    type: string | null;
                    args: never;
                };
                user: {
                    type: Record<CacheTypeDef, "UsersPermissionsMe">;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsMe: {
            idFields: {
                id: string;
            };
            fields: {
                blocked: {
                    type: boolean | null;
                    args: never;
                };
                confirmed: {
                    type: boolean | null;
                    args: never;
                };
                email: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                role: {
                    type: Record<CacheTypeDef, "UsersPermissionsMeRole"> | null;
                    args: never;
                };
                username: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsMeRole: {
            idFields: {
                id: string;
            };
            fields: {
                description: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                type: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsPasswordPayload: {
            idFields: never;
            fields: {
                ok: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsPermission: {
            idFields: never;
            fields: {
                action: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                role: {
                    type: Record<CacheTypeDef, "UsersPermissionsRoleEntityResponse"> | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsPermissionEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "UsersPermissionsPermission"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsPermissionRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UsersPermissionsPermissionEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsRole: {
            idFields: never;
            fields: {
                createdAt: {
                    type: any | null;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                permissions: {
                    type: Record<CacheTypeDef, "UsersPermissionsPermissionRelationResponseCollection"> | null;
                    args: {
                        filters?: UsersPermissionsPermissionFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                type: {
                    type: string | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
                users: {
                    type: Record<CacheTypeDef, "UsersPermissionsUserRelationResponseCollection"> | null;
                    args: {
                        filters?: UsersPermissionsUserFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
            };
            fragments: [];
        };
        UsersPermissionsRoleEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "UsersPermissionsRole"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsRoleEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "UsersPermissionsRoleEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsRoleEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UsersPermissionsRoleEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsUpdateRolePayload: {
            idFields: never;
            fields: {
                ok: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsUser: {
            idFields: never;
            fields: {
                blocked: {
                    type: boolean | null;
                    args: never;
                };
                confirmed: {
                    type: boolean | null;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                email: {
                    type: string;
                    args: never;
                };
                provider: {
                    type: string | null;
                    args: never;
                };
                role: {
                    type: Record<CacheTypeDef, "UsersPermissionsRoleEntityResponse"> | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
                username: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsUserEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "UsersPermissionsUser"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsUserEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "UsersPermissionsUserEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsUserEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UsersPermissionsUserEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsUserRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UsersPermissionsUserEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        VacationFacility: {
            idFields: never;
            fields: {
                createdAt: {
                    type: any | null;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                icon: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse">;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "VacationFacilityRelationResponseCollection"> | null;
                    args: {
                        filters?: VacationFacilityFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                title: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VacationFacilityEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "VacationFacility"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VacationFacilityEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "VacationFacilityEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VacationFacilityEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "VacationFacilityEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        VacationFacilityRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "VacationFacilityEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        Villa: {
            idFields: never;
            fields: {
                createdAt: {
                    type: any | null;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "VillaRelationResponseCollection"> | null;
                    args: {
                        filters?: VillaFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                minPrice: {
                    type: number | null;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                nbGuests: {
                    type: number;
                    args: never;
                };
                superficie: {
                    type: number;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
                villa_facilities: {
                    type: Record<CacheTypeDef, "VillaFacilityRelationResponseCollection"> | null;
                    args: {
                        filters?: VillaFacilityFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                villa_pictures: {
                    type: Record<CacheTypeDef, "VillaPictureRelationResponseCollection"> | null;
                    args: {
                        filters?: VillaPictureFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
            };
            fragments: [];
        };
        VillaEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "Villa"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "VillaEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "VillaEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaFacility: {
            idFields: never;
            fields: {
                createdAt: {
                    type: any | null;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "VillaFacilityRelationResponseCollection"> | null;
                    args: {
                        filters?: VillaFacilityFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                name: {
                    type: string | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
                villa_facility_type: {
                    type: Record<CacheTypeDef, "VillaFacilityTypeEntityResponse"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaFacilityEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "VillaFacility"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaFacilityEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "VillaFacilityEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaFacilityEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "VillaFacilityEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaFacilityRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "VillaFacilityEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        VillaFacilityType: {
            idFields: never;
            fields: {
                createdAt: {
                    type: any | null;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "VillaFacilityTypeRelationResponseCollection"> | null;
                    args: {
                        filters?: VillaFacilityTypeFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                title: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
                villa_facilities: {
                    type: Record<CacheTypeDef, "VillaFacilityRelationResponseCollection"> | null;
                    args: {
                        filters?: VillaFacilityFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
            };
            fragments: [];
        };
        VillaFacilityTypeEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "VillaFacilityType"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaFacilityTypeEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "VillaFacilityTypeEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaFacilityTypeEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "VillaFacilityTypeEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaFacilityTypeRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "VillaFacilityTypeEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        VillaPage: {
            idFields: never;
            fields: {
                bgImage: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse">;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "VillaPageRelationResponseCollection"> | null;
                    args: never;
                };
                seo: {
                    type: Record<CacheTypeDef, "ComponentSharedSeo"> | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaPageEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "VillaPage"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaPageEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "VillaPageEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaPageRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "VillaPageEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        VillaPicture: {
            idFields: never;
            fields: {
                createdAt: {
                    type: any | null;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                image: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse">;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "VillaPictureRelationResponseCollection"> | null;
                    args: {
                        filters?: VillaPictureFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaPictureEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "VillaPicture"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaPictureEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "VillaPictureEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaPictureEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "VillaPictureEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        VillaPictureRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "VillaPictureEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        VillaRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "VillaEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        VillasPage: {
            idFields: never;
            fields: {
                bgImage: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse">;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                locale: {
                    type: string | null;
                    args: never;
                };
                localizations: {
                    type: Record<CacheTypeDef, "VillasPageRelationResponseCollection"> | null;
                    args: never;
                };
                seo: {
                    type: Record<CacheTypeDef, "ComponentSharedSeo"> | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillasPageEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "VillasPage"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillasPageEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "VillasPageEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        VillasPageRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "VillasPageEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [];
};