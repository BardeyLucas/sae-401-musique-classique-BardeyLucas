/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Compositeur = "Compositeur",
	Formation = "Formation",
	ImageHero = "ImageHero",
	ImagesSlider = "ImagesSlider",
	Interpretation = "Interpretation",
	Oeuvre = "Oeuvre",
	Offre = "Offre",
	PageContent = "Page_content",
	Platforme = "Platforme",
	Projets = "Projets",
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CompositeurRecord = {
	id: string
}

export type FormationRecord = {
	id: string
}

export type ImageHeroRecord = {
	id: string
}

export type ImagesSliderRecord = {
	id: string
}

export type InterpretationRecord = {
	id: string
}

export type OeuvreRecord = {
	id: string
}

export type OffreRecord = {
	id: string
}

export type PageContentRecord = {
	id: string
}

export type PlatformeRecord = {
	id: string
}

export type ProjetsRecord = {
	id: string
}

export type AuthoriginsRecord = {
	collectionRef: string
	created?: IsoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated?: IsoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated?: IsoDateString
}

export type MfasRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	method: string
	recordRef: string
	updated?: IsoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated?: IsoDateString
}

export type SuperusersRecord = {
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

export type UsersRecord = {
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	verified?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type CompositeurResponse<Texpand = unknown> = Required<CompositeurRecord> & BaseSystemFields<Texpand>
export type FormationResponse<Texpand = unknown> = Required<FormationRecord> & BaseSystemFields<Texpand>
export type ImageHeroResponse<Texpand = unknown> = Required<ImageHeroRecord> & BaseSystemFields<Texpand>
export type ImagesSliderResponse<Texpand = unknown> = Required<ImagesSliderRecord> & BaseSystemFields<Texpand>
export type InterpretationResponse<Texpand = unknown> = Required<InterpretationRecord> & BaseSystemFields<Texpand>
export type OeuvreResponse<Texpand = unknown> = Required<OeuvreRecord> & BaseSystemFields<Texpand>
export type OffreResponse<Texpand = unknown> = Required<OffreRecord> & BaseSystemFields<Texpand>
export type PageContentResponse<Texpand = unknown> = Required<PageContentRecord> & BaseSystemFields<Texpand>
export type PlatformeResponse<Texpand = unknown> = Required<PlatformeRecord> & BaseSystemFields<Texpand>
export type ProjetsResponse<Texpand = unknown> = Required<ProjetsRecord> & BaseSystemFields<Texpand>
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Compositeur: CompositeurRecord
	Formation: FormationRecord
	ImageHero: ImageHeroRecord
	ImagesSlider: ImagesSliderRecord
	Interpretation: InterpretationRecord
	Oeuvre: OeuvreRecord
	Offre: OffreRecord
	Page_content: PageContentRecord
	Platforme: PlatformeRecord
	Projets: ProjetsRecord
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Compositeur: CompositeurResponse
	Formation: FormationResponse
	ImageHero: ImageHeroResponse
	ImagesSlider: ImagesSliderResponse
	Interpretation: InterpretationResponse
	Oeuvre: OeuvreResponse
	Offre: OffreResponse
	Page_content: PageContentResponse
	Platforme: PlatformeResponse
	Projets: ProjetsResponse
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Compositeur'): RecordService<CompositeurResponse>
	collection(idOrName: 'Formation'): RecordService<FormationResponse>
	collection(idOrName: 'ImageHero'): RecordService<ImageHeroResponse>
	collection(idOrName: 'ImagesSlider'): RecordService<ImagesSliderResponse>
	collection(idOrName: 'Interpretation'): RecordService<InterpretationResponse>
	collection(idOrName: 'Oeuvre'): RecordService<OeuvreResponse>
	collection(idOrName: 'Offre'): RecordService<OffreResponse>
	collection(idOrName: 'Page_content'): RecordService<PageContentResponse>
	collection(idOrName: 'Platforme'): RecordService<PlatformeResponse>
	collection(idOrName: 'Projets'): RecordService<ProjetsResponse>
	collection(idOrName: '_authOrigins'): RecordService<AuthoriginsResponse>
	collection(idOrName: '_externalAuths'): RecordService<ExternalauthsResponse>
	collection(idOrName: '_mfas'): RecordService<MfasResponse>
	collection(idOrName: '_otps'): RecordService<OtpsResponse>
	collection(idOrName: '_superusers'): RecordService<SuperusersResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
