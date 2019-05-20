/**
 * Get the URL to a Gravatar image from an email.
 *
 * @param email - Email matching a Gravatar profile.
 * @example
 * ```
 * import gravatarUrl = require('@xn-02f/gravatar');
 * gravatarUrl('i@example.com', {s: 80});
 * //=> 'https://www.gravatar.com/avatar/961254e23a4de2aa887ac0f56ef5debf?s=80'
 * ```
 */

declare const gravatar: (
	email: string,
	options?: object
) => string;

export = gravatar;
